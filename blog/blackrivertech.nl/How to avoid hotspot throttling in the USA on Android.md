---
aliases:
  - public/blog/blackrivertech.nl/How to avoid hotspot throttling in the USA
  - public/blog/blackrivertech.nl/How to avoid hotspot throttling in the USA (Android)
publish: true
---

![[Pasted image 20231109110405.jpg]]
**Slow internet on a phone hotspot? In the USA, many providers will not allow you to use the data that you yourself already paid for when you decide to share that data with your friends and family, or just another one of your own devices. For example T-Mobile does this.**

## What do you need

- Any VPN subscripton ([there are free options](https://www.youtube.com/watch?v=LCt0BLAkAxA))
- The app of your VPN provider installed on your phone
- The [Every Proxy](https://play.google.com/store/apps/details?id=com.gorillasoftware.everyproxy&hl=en_US&gl=US) App
- 10 minutes to Spare

## Testing your speed

Navigate to [fast.com](https://fast.com) which is a website that helps you determine your current internet speed. Usually when being trottled, the speed will stay below 1Mbps (or 1000Kbps equivalent). In my case: 798Kbps (0.78Mbps).
![[Pasted image 20231109090903.png]]

## Configuring Hotspot device (Android only)

Go ahead to the Google Play Store and download/install [Every Proxy](https://play.google.com/store/apps/details?id=com.gorillasoftware.everyproxy&hl=en_US&gl=US)

Once you have it, open the app where you will see 3 sliders. Enable the HTTP (first) and PAC (last) ones.

| ![[Pasted image 20231029225130.png\|300]] | ![[pac_config.jpeg]] My PAC config |
| ----------------------------------------- | ---------------------------------- |

Then under PAC, you will will see a list of URLs at the bottom, write the first one of these down (any of them is alright). We'll call this your magic link for now.

> [!note] My magic link here is:
> http://192.168.25.82:8081/proxy.pac

Now go to your VPN app and connect to a (any) server. In my case I am using [ProtonVPN](https://protonvpn.com/).
![[vpn_connected.jpeg|500]]
And lastly: turn on your hotspot via Settings>Network & Internet>Hotspot & Tethering>Wi-Fi Hotspot.

Just turn on the hotspot and configure a password if you haven't already. Now you're ready to connect another device to this hotspot.

![[hotspot_screenshot.jpeg|300]]

> [!tip] The hotspot is also available in your notification menu for quicker access

## Configuring Hotspot user

Now you only need to do two things to make use of this hotspot on another device. First you connect to the wifi hotspot like you always would. Find the Hotspot network in your Wi-Fi settings and connect to it.

The second step is different depending on which phone you are using to connect to the hotspot. I described those steps separately in the section below.

### Android

| ![[settings_network_list.jpeg]] Find the Wi-Fi Network you just created and connected to, hit the gear icon to go to its details. | ![[settings_network_details.jpeg]] Hit the pencil to go to additional settings. |
| --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |

| ![[settings_network_details_advanced.jpeg]] Find the Proxy settings | ![[settings_network_details_advanced_proxy.jpeg]] Select `Proxy Auto-Config` and fill in the magic link we got from the EverProxy app. |
| ------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |

### iPhone

Since I do not have an iPhone to demonstrate it on myself i found you a video that will explain it in under a minute where to add the magic link. Just watch the first 40-ish seconds of this video to add it:

https://www.youtube.com/watch?v=8ZcGL949OKE

## Testing your speed again

Simply use the device that connects to the hotspot and navigate to a speedtest website like [fast.com](https://fast.com) and see what your current network speed is.
![[Screenshot from 2023-11-09 10-05-45.png]]
The speed test should now give you a comparable speed as the host phone (the one that created the hotspot) gets.

## Why this works

(US) Internet and phone providers are notorious for tracking their users, and throttling is a result of them being able to track your traffic.

Internet traffic works in hops. When you load a website, your request to see that website travels in multiple hops to the owner of that website. First from your phone to your Wi-Fi router at home, to the data-center in the neighborhood and then on to the website.

What happens when you create a hotspot on your phone and someone uses that, it adds one hop to every website request you make. And providers like T-Mobile can see that because the traffic travels through them, and they abuse it to prevent you from using your phone as a hotspot.

So what we are doing here is making the traffic invisible to them, by using a VPN. Then they have no clue what you are actually doing on your phone, which websites you are using and whether or not you are making/using a hotspot. Because all the hotspot traffic also goes through this same VPN. This doesn't happen by default, and that is why we use an app like EverProxy to make the hotspot traffic also go through the VPN.

## Considerations

This does not work for all kinds of network traffic, some apps might still suffer from the same throttling. But most of your apps should work just fine, including regular web browsing.

## Sources

- Images of everyproxy app: https://www.everyproxy.co.uk/how-to-use-every-proxy
- Speedtest website: [fast.com](https://fast.com)
