---
original_url: https://arjenstens.com/arduino-string-class-alternative/
type:
  - blog
publish: true
---

![[Pasted image 20231010161937.png]]
**Whilst getting more familiar with Arduino and all the pros and cons of the default Arduino eco-system, you might notice the comments** **everywhere suggesting you shouldn't Arduino's built-in String class**. **And rightfully so! But why? And what should you use instead? That's what this blog will hopefully provide a satisfying answer to.**

> [!tip] **TLDR;** You can download my library at the bottom of this page.

## Arduino's `String` can (and probably will) corrupt your memory

Arduino's built-in String object/library is perfect for simple string operations, like concatenating strings, splitting them or appending to them. However, at some point they will start to fragment the memory of your Arduino, you can read [here](https://cpp4arduino.com/2018/11/06/what-is-heap-fragmentation.html) how that works in detail. But long story short: after a while of fragmenting the memory, your Arduino runs out of usable space, even if you seemingly have enough left.

The problem with situations like these is that they can be very, VERY hard to debug, since Arduino's will just crash or start acting weird without a clear cause.

## But what can I do about it?

Well, there are two main options. The first is storing your strings in fixed-length character arrays. This is nice because you are no longer fragmenting your Arduino's memory. However, since a character array is nothing more than just that, you can't just do those pretty operations on them anymore. You could cast the array to a String, do the modifications and then save it again, that is possible, although very inefficient.

```c++
void setup() {
  Serial.begin(9600);

  char myString[8] = {'A', 'r', 'd', 'u', 'i', 'n', 'o', '\0'};
  char myNewString[32];

  String temporaryString = String(myString); // Create String from char[]
  temporaryString.concat(" is awesome."); // Add some text
  temporaryString.toCharArray(myNewString, 32); // Store all text in myNewString

  Serial.println(myNewString); // "Arduino is awesome."
}
```

So in all my frustration, looking for something that would solve my problem I decided to take it up on my own, thus providing you the second (and better) option. My requirements for this were:

- I should not fragment my memory
- It must convert from and to character arrays
- It must be able to do lots of string operations, just like the Arduino's string (or std::string for that matter)

Out of this, the [StackString library](https://gitlab.com/arduino-libraries/stackstring) was born. This library enables me to easily build Strings and modify them, without the danger of introducing memory fragmentation. The biggest difference with regular Strings is that you have to define a maximum length of the string before compilation. But within that range you can do anything you want without fear.

## How to use

Creating a new StackString is dead simple. First include the library on top of your code and make sure you `use` the namespace it is in:
```c++
#include <StackString.hpp>
using namespace Stack; // Important!

Then, in your own code you can add this:

StackString<100> myString = StackString<100>("Hello, World!");
```

You can, just like regular strings declare it anywhere you want, the only difference is the number between the `<>`. That's where you declare the maximum length of the string. In case of the example above that's 100. Notice that the length of your string's content doesn't have to match that number, it just shouldn't exceed it.

After initializing the StackString, you can perform various operations on it, such as appending, prepending, comparing, searching and printing. A full list of all features can be found [here](https://gitlab.com/arduino-libraries/stackstring).

Here's an example of adding text in front of the string declared above:

```c++
myString.prepend("Everybody say: ");
```

When we're done modifying the string and want to print it. We need to use the `c_str()` function, this function converts the `StackString` to a `char[]` which is an accepted input by almost any other library. Here's an example of printing out the `myString` variable:

```c++
Serial.println(myString.c_str()); // Prints "Everybody say: Hello, World!"
```

## Where can I get the library?

You can add this library to your project in the following three different ways:

- Install it through the PlatformIO library manager, [which I highly suggest using over the Arduino IDE](//arjenstens.com/platformio-easier-arduino-programming/).
- Use the Arduino library manager to add the library, just search for StackString and you'll find it. Don't know how? Take a look at [this tutorial.](https://www.digikey.com/en/maker/blogs/2018/how-to-install-arduino-libraries)
- Lastly, you can download the library as a Zip-file using [this link.](https://gitlab.com/arduino-libraries/stackstring/-/archive/master/stackstring-master.zip) (Note that you won't get automatic updates this way)

## Useful links

**Article on heap fragmentation on** [cpp4arduino.com](https://cpp4arduino.com/2018/11/06/what-is-heap-fragmentation.html)  
**A library for timing of your code:** [StensTimer](//arjenstens.com/rock-arduino-multi-tasking-stenstimer/)  
**All functionality in the StackString library:** [StackString](https://gitlab.com/arduino-libraries/stackstring)