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



```typescript
export default {
	async fetch(request, env, ctx) {
		const data = {
			names: {
				arjen: "bbb5dda0e15567979f0543407bdc2033d6f0bbb30f72512a981cfdb2f09e2747"
			},
			relays: {
				"bbb5dda0e15567979f0543407bdc2033d6f0bbb30f72512a981cfdb2f09e2747": [ "wss://nos.lol", "wss://relay.damus.io" ]
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
