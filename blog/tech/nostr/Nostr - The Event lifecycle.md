---
publish: true
---

**Nostr knows different kinds of event lifecycles (or, lifetimes). In some cases, you want to only keep one copy of an event (like your profile). In other instances like a public announcement of a product sale, you might not want that to stick around forever. Below you can find a quick summary of each of the event lifetimes Nostr has to offer.**

To view a full list of all kinds + their respective lifetime, check out this overview: [[Nostr - The Event lifecycle]].
## Regular

Regular events will 'forever' be stored on Nostr, unless explicitly deleted by all relays, either through honoring a [NIP-09 (delete)](https://nostr-nips.com/nip-09) event or at their own accord.

### Applies to kinds

- Kind `1`
- Kind `4` up to (and including) 40
- Kind `42`
- Kind `43`
- Kind `44`
- Kind `1000` up to (and including) `9999`

---
## Ephemeral

Ephemeral messages are essentially a 'fire and forget' message. There is no need to retain the information of this event for a long time. This is generally used for handling communication between the relay and the client, such as authentication or payment requests.

### Example use-cases

- Authenticating to a relay (paid, whitelisted)
- Handling payments

### Applies to kinds

- Any event `Kind` of `20000` up to (and including) `29999` are considered Ephemeral

---

## Replaceable

Replacable events are ones where only the latest version of it is relevant. For example your profile picture or your Lightning wallet address. You don't want people to send money to an old address that's no longer in use.

Relays will therefore only keep one event of the `Kind`s in this category for your public key. That means if you want to update say your profile picture. You publish a new event of `kind=0` and every relay will save this latest event and discard any of your earlier events of `kind=0`.
### Example use-cases

- Profile picture
- Lightning wallet address

### Applies to kinds

- Kind `0`
- Kind `3`
- Kind `41`
- Kind `10000` up to (and including) `19999` are considered `Replacable`

---

## Parameterized Replaceable

Parameterized Replacable events are a more flexible than the 'Replacable' events. Where the 'Replacable' events will exist once for your public key + kind (example: your profile picture), the 'Parameterized Replacable' introduces the `d` tag. This makes it so that you can have multiple events of the same kind, and still modify them later on.

Take for example a calendar event. You're one person (pubkey) but you should be able to organize multiple meetings at once. let's say, you're organising a birthday party, you can use [NIP-52](https://nostr-nips.com/nip-52) and create a `kind=31922` event which also requires you to provide a `d` tag with a unique GUID. This way you can make countless calendar events. Your event will include who's invited, the when and where, and also a location (your house).

If for some reason you want to change the location to a friend's house instead, you now don't have to create an entirely new calendar item. You can just send the same `kind=31922` event, but with the altered location. The only thing you have to do is make sure the `d` tag is the same as the one you originally sent.

The relays will pick up this event and notice they already have a version of this event. But since this one is newer, they will store the new event and discard the old one.

### Example use-cases

- Fixing a type in your long-form post ([NIP-23](https://nostr-nips.com/nip-23))
- Update the shipping-costs of an item for sale ([NIP-15](https://nostr-nips.com/nip-15), Kind [30018](https://nostr-nips.com/nip-15#event-30018-create-or-update-a-product))
- A calendar event, changing location ([NIP-52](https://nostr-nips.com/nip-52))

### Applies to kinds

- Kind `30000` up to (and including) `39999` are considered `Parameterized Replacable`

---
## Expiring

An expiration timestamp can be added to any `kind` to signify to relays that this event loses significance after the defined point in time has passed. Essentially telling the relays they can get rid of it and delete it from their databases.

The timestamp is defined as a UNIX timestamp in seconds, the detailed spec is defined in [NIP-40](https://nostr-nips.com/nip-40)

```json
"kind": 1337 # Can be any
"tags": [
	["expiration", "1600000000"] # UNIX timestamp in seconds
],
```

### Example use-cases

- Sales announcements

### Applies to kinds

- Any
