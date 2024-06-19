---
publish: false
---
**As I'm diving into Nostr, I'm learning that it's a good idea to get NIP-05 verified. This is nothing more than a tool to make you more findable in a web of public keys. NIP-05 wil help you be findable by yourname@somedomain.com instead of a public key that look like this: npub1hw6amg8p24ne08c9gdq8hhpqx0t0pwanpae9z25crn7m9uy7yarse465gr**

## Prerequisites
- A Nostr private/public keypair
- A CloudFlare account
- 1 or more domain names tied to your cloudflare account

## Assumptions
I'm going to assume that you own your domain and that you are only trying to NIP-05 verify your own Nostr account.

## Let's get started
In the left side menu in CloudFlare, go to Workers & Pages, hit Create, Create Worker and pick a beautiful name, click next and hit finish. This will create a "Hello, World!" worker for you.

![[cloudflare-worker1.png]]

Ok, so now you have set up a worker. Our next step is edit the code of this worker to return your profile's information. Go to the overview page and hit Edit Code. In the code editor paste the following code:

```javascript
export default {
	async fetch(request, env, ctx) {
		const data = {
			names: {
				YOUR_USERNAME: "YOUR_HEX_NPUB"
			},
			relays: {
				"YOUR_HEX_NPUB": [ "wss://nos.lol", "wss://relay.damus.io" ]
			}
		};
		
		const json = JSON.stringify(data, null, 2);

		return new Response(json, {
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Content-Type': 'application/json;charset=UTF-8',
			},
		});
	},
};
```

This piece of code will expose an endpoint that returns the content under `data` in JSON format. This can be used by anyone to check if YOUR_USERNAME@yourdomain.com is actually owned by you. The `YOUR_HEX_NPUB` field should be not your regular npub, but a hex version of it. You can convert yours to a hex version of your key [here](https://nostrcheck.me/converter/).

The relays part is optional, but recommended. Here you can configure your preferred relays so that people know on which ones to find you. It is important to also respond with the `Access-Control-Allow-Origin` header to [Allow access from JavaScript apps](https://github.com/nostr-protocol/nips/blob/master/05.md#allowing-access-from-javascript-apps).

