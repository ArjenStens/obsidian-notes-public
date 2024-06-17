**When digging deeper into the technical documentation of Nostr, which is quite limited still I came across a tag in NIP-01 that would refer to a replacable event.**

A replacable event is as the name suggests, a Nostr note where you have the ability to send a new note, referencing the old one and therefore replacing it. This means that all relays that receive this new note, will drop the old one.