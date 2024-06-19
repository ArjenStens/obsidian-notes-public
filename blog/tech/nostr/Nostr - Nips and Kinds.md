---
publish: true
---


| kind    | NIP                                 | description                            | Lifetime                                                                         |
| ------- | ----------------------------------- | -------------------------------------- | -------------------------------------------------------------------------------- |
| `0`     | [1](https://nostr-nips.com/nip-01)  | Metadata                               | [[Nostr - Event lifetimes#Replaceable\|Replaceable]]                             |
| `1`     | [1](https://nostr-nips.com/nip-01)  | Short Text Note                        | [[Nostr - Event lifetimes#Regular\|Regular]]                                     |
| `2`     | *                                   | Recommend Relay                        | n/a                                                                              |
| `3`     | [2](https://nostr-nips.com/nip-02)  | Contacts                               | [[Nostr - Event lifetimes#Replaceable\|Replaceable]]                             |
| `4`     | [4](https://nostr-nips.com/nip-04)  | Encrypted Direct Messages (DEPRECATED) | [[Nostr - Event lifetimes#Regular\|Regular]]                                     |
| `5`     | [9](https://nostr-nips.com/nip-09)  | Event Deletion                         | [[Nostr - Event lifetimes#Regular\|Regular]]                                     |
| `6`     | [18](https://nostr-nips.com/nip-18) | Repost                                 | [[Nostr - Event lifetimes#Regular\|Regular]]                                     |
| `7`     | [25](https://nostr-nips.com/nip-25) | Reaction                               | [[Nostr - Event lifetimes#Regular\|Regular]]                                     |
| `8`     | [58](https://nostr-nips.com/nip-58) | Badge Award                            | [[Nostr - Event lifetimes#Regular\|Regular]] (immutable)                         |
| `16`    | [18](https://nostr-nips.com/nip-18) | Generic Repost                         | [[Nostr - Event lifetimes#Regular\|Regular]]                                     |
| `40`    | [28](https://nostr-nips.com/nip-28) | Channel Creation                       | ?                                                                                |
| `41`    | [28](https://nostr-nips.com/nip-28) | Channel Metadata                       | [[Nostr - Event lifetimes#Replaceable\|Replaceable]]                             |
| `42`    | [28](https://nostr-nips.com/nip-28) | Channel Message                        | [[Nostr - Event lifetimes#Regular\|Regular]]                                     |
| `43`    | [28](https://nostr-nips.com/nip-28) | Channel Hide Message                   | [[Nostr - Event lifetimes#Regular\|Regular]]                                     |
| `44`    | [28](https://nostr-nips.com/nip-28) | Channel Mute User                      | [[Nostr - Event lifetimes#Regular\|Regular]]                                     |
| `1063`  | [94](https://nostr-nips.com/nip-94) | File Metadata                          | [[Nostr - Event lifetimes#Regular\|Regular]]                                     |
| `1311`  | [53](https://nostr-nips.com/nip-53) | Live Chat Message                      | [[Nostr - Event lifetimes#Regular\|Regular]]                                     |
| `1040`  | [03](https://nostr-nips.com/nip-03) | OpenTimestamps                         | [[Nostr - Event lifetimes#Regular\|Regular]]                                     |
| `1984`  | [56](https://nostr-nips.com/nip-56) | Reporting                              | [[Nostr - Event lifetimes#Regular\|Regular]]                                     |
| `1985`  | [32](https://nostr-nips.com/nip-32) | Label                                  | [[Nostr - Event lifetimes#Regular\|Regular]]                                     |
| `4550`  | [72](https://nostr-nips.com/nip-72) | Community Post Approval                | [[Nostr - Event lifetimes#Regular\|Regular]]                                     |
| `9041`  | [75](https://nostr-nips.com/nip-75) | Zap Goal                               | [[Nostr - Event lifetimes#Regular\|Regular]]                                     |
| `9734`  | [57](https://nostr-nips.com/nip-57) | Zap Request                            | [[Nostr - Event lifetimes#Regular\|Regular]]                                     |
| `9735`  | [57](https://nostr-nips.com/nip-57) | Zap                                    | [[Nostr - Event lifetimes#Regular\|Regular]]                                     |
| `10000` | [51](https://nostr-nips.com/nip-51) | Mute List                              | [[Nostr - Event lifetimes#Replaceable\|Replaceable]]                             |
| `10001` | [51](https://nostr-nips.com/nip-51) | Pin List                               | [[Nostr - Event lifetimes#Replaceable\|Replaceable]]                             |
| `10002` | [65](https://nostr-nips.com/nip-65) | Relay List Metadata                    | [[Nostr - Event lifetimes#Replaceable\|Replaceable]]                             |
| `13194` | [47](https://nostr-nips.com/nip-47) | Wallet Info                            | [[Nostr - Event lifetimes#Replaceable\|Replaceable]]                             |
| `22242` | [42](https://nostr-nips.com/nip-42) | Client Authentication                  | [[Nostr - Event lifetimes#Ephemeral\|Ephemeral]]                                 |
| `23194` | [47](https://nostr-nips.com/nip-47) | Wallet Request                         | [[Nostr - Event lifetimes#Ephemeral\|Ephemeral]]                                 |
| `23195` | [47](https://nostr-nips.com/nip-47) | Wallet Response                        | [[Nostr - Event lifetimes#Ephemeral\|Ephemeral]]                                 |
| `24133` | [46](https://nostr-nips.com/nip-46) | Nostr Connect                          | [[Nostr - Event lifetimes#Ephemeral\|Ephemeral]]                                 |
| `27235` | [98](https://nostr-nips.com/nip-98) | HTTP Auth                              | [[Nostr - Event lifetimes#Ephemeral\|Ephemeral]]                                 |
| `30000` | [51](https://nostr-nips.com/nip-51) | Categorized People List                | [[Nostr - Event lifetimes#Parameterized Replaceable\|Parameterized Replaceable]] |
| `30001` | [51](https://nostr-nips.com/nip-51) | Categorized Bookmark List              | [[Nostr - Event lifetimes#Parameterized Replaceable\|Parameterized Replaceable]] |
| `30008` | [58](https://nostr-nips.com/nip-58) | Profile Badges                         | [[Nostr - Event lifetimes#Parameterized Replaceable\|Parameterized Replaceable]] |
| `30009` | [58](https://nostr-nips.com/nip-58) | Badge Definition                       | [[Nostr - Event lifetimes#Parameterized Replaceable\|Parameterized Replaceable]] |
| `30017` | [15](https://nostr-nips.com/nip-15) | Create or update a stall               | [[Nostr - Event lifetimes#Parameterized Replaceable\|Parameterized Replaceable]] |
| `30018` | [15](https://nostr-nips.com/nip-15) | Create or update a product             | [[Nostr - Event lifetimes#Parameterized Replaceable\|Parameterized Replaceable]] |
| `30023` | [23](https://nostr-nips.com/nip-23) | Long-form Content                      | [[Nostr - Event lifetimes#Parameterized Replaceable\|Parameterized Replaceable]] |
| `30024` | [23](https://nostr-nips.com/nip-23) | Draft Long-form Content                | [[Nostr - Event lifetimes#Parameterized Replaceable\|Parameterized Replaceable]] |
| `30078` | [78](https://nostr-nips.com/nip-78) | Application-specific Data              | [[Nostr - Event lifetimes#Parameterized Replaceable\|Parameterized Replaceable]] |
| `30311` | [53](https://nostr-nips.com/nip-53) | Live Event                             | [[Nostr - Event lifetimes#Parameterized Replaceable\|Parameterized Replaceable]] |
| `30315` | [38](https://nostr-nips.com/nip-38) | User Statuses                          | [[Nostr - Event lifetimes#Parameterized Replaceable\|Parameterized Replaceable]] |
| `30402` | [99](https://nostr-nips.com/nip-99) | Classified Listing                     | [[Nostr - Event lifetimes#Parameterized Replaceable\|Parameterized Replaceable]] |
| `30403` | [99](https://nostr-nips.com/nip-99) | Draft Classified Listing               | [[Nostr - Event lifetimes#Parameterized Replaceable\|Parameterized Replaceable]] |
| `31922` | [52](https://nostr-nips.com/nip-52) | Date-Based Calendar Event              | [[Nostr - Event lifetimes#Parameterized Replaceable\|Parameterized Replaceable]] |
| `31923` | [52](https://nostr-nips.com/nip-52) | Time-Based Calendar Event              | [[Nostr - Event lifetimes#Parameterized Replaceable\|Parameterized Replaceable]] |
| `31924` | [52](https://nostr-nips.com/nip-52) | Calendar                               | [[Nostr - Event lifetimes#Parameterized Replaceable\|Parameterized Replaceable]] |
| `31925` | [52](https://nostr-nips.com/nip-52) | Calendar Event RSVP                    | [[Nostr - Event lifetimes#Parameterized Replaceable\|Parameterized Replaceable]] |
| `31989` | [89](https://nostr-nips.com/nip-89) | Handler recommendation                 | [[Nostr - Event lifetimes#Parameterized Replaceable\|Parameterized Replaceable]] |
| `31990` | [89](https://nostr-nips.com/nip-89) | Handler information                    | [[Nostr - Event lifetimes#Parameterized Replaceable\|Parameterized Replaceable]] |
| `34550` | [72](https://nostr-nips.com/nip-72) | Community Definition                   | [[Nostr - Event lifetimes#Parameterized Replaceable\|Parameterized Replaceable]] |
