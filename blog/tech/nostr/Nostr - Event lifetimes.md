**Much like when you post something**

## Regular

### Applies to kinds
- Any event `Kind` of `1000` up to (and including) `9999`
## Ephemeral
Ephemeral messages are essentially a 'fire and forget' message. There is no need to retain the information of this event for a long time. This is generally used for handling communication between the relay and the client, such as authentication or payment requests.
### Example use-cases
- Authenticating to a relay (paid, whitelisted)
- Handling payments
### Applies to kinds
- Any event `Kind` of `20000` up to (and including) `29999` are considered Ephemeral

## Replaceable
Replacable events are ones where only the latest version of it is relevant. For example your profile picture or your Lightning wallet address. You don't want people to send money to an old address that's no longer in use.

Relays will therefore only keep one event of the `Kind`s in this category for your public key. That means if you want to update say your profile picture. You publish a new event of `kind=0` and every relay will save this latest event and discard any of your earlier events of `kind=0`.
### Example use-cases
- Profile picture
- Lightning wallet address
### Applies to kinds
- `Kind=0`
- `Kind=3`
- any event `Kind` of `10000` up to (and including) `19999` are considered `Replacable`
## Parameterized Replaceable

events are **parameterized replaceable**, which means that, for each combination of `pubkey`, `kind` and the `d` tag's first value, only the latest event MUST be stored by relays, older versions MAY be discarded.

### Example use-cases
- ??

### Applies to kinds
- Any event `Kind` of `30000` up to (and including) `39999` are considered `Parameterized Replacable`
## Expiring
- Disappearing chats
- Announcements
- NIP-40

### Applies to kinds
- Any
