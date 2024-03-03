---
original_url: https://arjenstens.com/timer-callback-library-for-multitasking-arduino/
type:
  - blog
publish: true
---

![[Pasted image 20231010164751.png]]
**In this blog post I will show you how you can easily multi-task with your Arduino projects, so you don't have to use the delay() function anymore. With an easy step-by-step guide you can make your** **Arduino projects more efficient than ever before.**

# Why should I use StensTimer?

There are several reasons to consider using StensTimer. Below I will provide some reasons to use a timer library and why it should be this one.

![[Pasted image 20231010162559.png]] Is it worth the wait?

## Because delay() sucks

Admit it, how many times did you find yourself in a situation where you needed to execute some code with a delay but didn't want to just wait for it while doing nothing else? I know I did, more than once. This here is why you should ditch Arduino's delay()delay()` function in the first place. The `delay()` function sucks up valuable time that can instead be used for much better things than just sitting around and doing nothing.

## Easy multitasking

### Keeping track of time

Don't worry, you don't have to keep track of time yourself, just let StensTimer handle the timing. This enables you to easily create a new timer with any delay you wish, at any moment. The only thing you have to do is setting up a function for StensTimer to call when your set timer has elapsed.

### Customization

There are different timer libraries out there in different shapes and sizes. StensTimer aims to be a very customizable one, which is currently achieved by the following characteristics.

#### Set action ID's

You can give the timer a message to pass back to you in the form of an action ID you can make up yourself. You can then later use this ID to execute your desired piece of code. You can also change this action ID anytime you wish, in case you want to change behaviour on the fly.

#### Change timeout/interval on runtime

If ever you have to adjust your timer to another interval you don't have to deal with deleting timers and then creating new ones. You just change the timeout or interval whenever you feel like it.

#### Change repetitions

Just like changing the timer's timeout or interval you can edit the remaining repetitions. For example: when there is a case where your timer has to run one extra time (or more) you don't have to create a new timer.

## Class-instance callbacks (advanced)

I actually wrote this library to enable timers to call back classes I created multiple instances of. The problem with the basic timer libraries out there is that they don't support timer callbacks on these class instances. In my search for libraries that support this I tried [Auden's delegate library](http://forum.arduino.cc/index.php?topic=86758.0), which worked but unfortunately had quite some negative side-effects at my sketches.

To give you an idea about the possibilities of class-instance callbacks: Imagine you are programming 3 cooker alarms, that all have the same blueprint (class). In the code, what you want to do is just create three instances of the cooker alarm class. Of course, since you want to be able to set/start/pause/reset the clock, you want to be able to tell the particular clock you are working with to start ticking. How are you going to manage this, when the only callback function you can have is a single static function in the main class of your program? You can't, at least not in a somewhat clean way.

The class-instance callbacks enable you to implement the timer functionality in your cooker alarm class. This means that you only have to write the timing functionality once, no matter how many cooker alarms you create. So if you are dealing with a similar issue you're in the right place.
![[Pasted image 20231010162638.png]]
# How to get the library

There are three options available to get the library, each one will be described below.

## PlatformIO library manager

The library is publicly available in PlatformIO's library manager. I highly recommend to start using PlatformIO for your future Arduino projects. Read [here how to get started](//arjenstens.com/platformio-easier-arduino-programming/) with PlatformIO.

When you are using PlatformIO you can go to its library manager and type 'StensTimer' in the search bar. Hit the download button and you're all set. Through the library manager you will automatically be notified whenever there is an update available.

The library can also be found via [this link](http://platformio.org/lib/show/1942/StensTimer).

## Arduino library manager

Arduino has a library manager quite similar to that of PlatformIO. You can access this one through the Arduino IDE. To do this, open the IDE and go to **Sketch>Include Library>Manage Libraries...** to open the library manager. Then you can type StensTimer inside the search bar and hit enter. You should then find the library, select your preferred version and hit install.

## Zip download

If the above options don't suit your needs you can download the library as a Zip file [here](https://gitlab.com/arduino-libraries/stens-timer/repository/master/archive.zip). But be aware that you won't get automatic updates this way.
![[Pasted image 20231010162653.png]]
# How to use the library

Once you've downloaded the library you are ready to use it. Here I will explain the basic usage of the library. Soon I'll write a blog post to explain the more advanced usage of the library with class-instance callbacks. You can also check out the included examples for the basic usage as well as the more advanced one.

## Basic setup

Before you can create your first timer there are some basic setup steps you need to take. In this paragraph I will guide you through these steps.

### Include

The first step is to include the library in your sketch. Just add the following line at the top of your file.

```c++
#include <StensTimer.h>
```

### StensTimer variable

The second thing to add to your code is a pointer to the StensTimer instance, which we will assign later. (At this moment just set it to `NULL`). Note that pointer variables are distinguishable by the data type followed by a `*`.

```c++
/* stensTimer variable to be used later in the code */
StensTimer* stensTimer = NULL;
```

### The callback function

Next, you'll need a function for StensTimer to call whenever a timer has elapsed, you can rename this function however you want. I will just name it `timerCallback`. There are two requirement for the function. The first one is that it has one parameter of the type `Timer*` (pointer to a `Timer` object). The second requirement is that the function must be static. If you want to use a non-static callback function please refer to the class-instance callback example.

```c++
void timerCallback(Timer* timer){
/* This function is called when a timer has passed */
}
```

### Inside setup()

Inside the setup function we will first retrieve the instance of the `StensTimer` class, you can access the timer from everywhere. For convenience we will assign it to the variable we created earlier. After you retrieved the `StensTimer` instance, you can pass the callback function to the library. this function will be used for all timer callbacks. Note that functions are called with `->` instead of `.`, this is because our `stensTimer` variable is a pointer.

```c++
/* Save instance of StensTimer to the tensTimer variable*/
stensTimer = StensTimer::getInstance();

/* Tell StensTimer which callback function to use */
stensTimer->;setStaticCallback(timerCallback);
```

### Inside loop()

Last but not least, the timer's `run()` function should be called at least once every time the `loop()` function is executed. This functions will check for every timer if it has elapsed. if it has, the callback function will be called.

```c++
/* let StensTimer do it's magic every time loop() is executed */
stensTimer->run();
```

### A quick summary

When you followed the steps above correctly, your code should look something similar to this:
```c++
#include <Arduino.h>
#include <StensTimer.h>

/* stensTimer variable to be used later in the code */
StensTimer* stensTimer = NULL;

void timerCallback(Timer* timer){
  /* This function is called when a timer has passed */
}

void setup() {
  /* Save instance of StensTimer to the tensTimer variable*/
  stensTimer = StensTimer::getInstance();

  /* Tell StensTimer which callback function to use */
  stensTimer->setStaticCallback(timerCallback);
}

void loop() {
  /* let StensTimer do it's magic every time loop() is executed */
  stensTimer->run();
}
```

## Creating a timer

Now that your basic setup is complete, you can start creating timers. For this example we will increase a counter by 1 every second. For this, we'll create a global variable:

```c++
int counter = 0;
```

### Defining an action

Next, we will define the timer action to use at the top of the file. Defining actions this way is not necessary but it can make your code more readable.

```c++
#define TICK_ACTION 1
```

### Creating the timer

You can create two types of timers. Infinite repeating ones (using `setInterval(int action, long interval);`) and a timer running a specified amount of times (using `setTimer(int action, long delay, long repetitions)`,  repetitions is optional which defaults to 1).

In our case we will set an interval to increase our counter variable every second like this:

```c++
Timer* myFirstTimer = stensTimer->setInterval(TICK_ACTION, 1000);
```
As you can see you can see in the example above you can store a pointer variable of the newly created timer. This way you can later edit the timer without having to wait until the callback function is being executed.

### Listening for the timer

After we created the timer we can add functionality to this timer by listening for the action we attached earlier. We will add the following code inside our `timerCallback()`function to accomplish this.

```c++
void timerCallback(Timer* timer){

  /* check if the timer is one we expect */
  if(TICK_ACTION == timer->getAction()){
    /* increate counter and print its value */
    counter++;
    Serial.print("counter: ");
    Serial.println(counter);
  }
}
```

## The final result

If you followed all the steps correctly, you can compile the code and upload it to your Arduino.

### Output

```c++
counter: 1
counter: 2
counter: 3
//coun...
```

### Final code
```c++
#include <Arduino.h>
#include <StensTimer.h>

#define TICK_ACTION 1

/* stensTimer variable to be used later in the code */
StensTimer* stensTimer = NULL;

/* Our counter variable
int counter = 0;

void timerCallback(Timer* timer){
   /* check if the timer is one we expect */
  if(TICK_ACTION == timer->getAction()){
    counter++;
    Serial.print("counter: ");
    Serial.println(counter);
  }
}

void setup() {
  Serial.begin(9600); // don't forget this in order to use Serial

  /* Save instance of StensTimer to the tensTimer variable*/
  stensTimer = StensTimer::getInstance();

  /* Tell StensTimer which callback function to use */
  stensTimer->setStaticCallback(timerCallback);

  Timer* myFirstTimer = stensTimer->setInterval(TICK_ACTION, 1000);
}

void loop() {
  /* let StensTimer do it's magic every time loop() is executed */
  stensTimer->run();
}
```

# Thank you!

And that's about it! I hope I made your Arduino programming life just a little bit easier today. Thank you for reading!

If you happen to find a bug or have any requests or feedback, please let me know in the comments below. You can also contribute to the project at [GitLab](https://gitlab.com/arduino-libraries/stens-timer).