## Fee Alert Console

### Data Source
Pulled from Master Sheet using QUERY.

### Formula
```excel
=QUERY('Master Sheet'!A2:AJ,"SELECT C,D,M,Q,R,S,AD",1)


WhatsApp Reminder Link:
=HYPERLINK(
 "https://wa.me/" & B3 &
 "?text=Hello " & A3 &
 ", this is a reminder to complete your pending fees of " & F3,
 "Send Reminder"
)
