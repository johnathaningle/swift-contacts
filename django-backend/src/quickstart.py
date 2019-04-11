import imaplib, email

username = "???"
password = "???"
imap_url = "imap.gmail.com"

# def get_body(msg):
#     if msg.is_multipart():
#         return get_body(msg.get_payload(0))
#     else:
#         return msg.get_payload(None, True)

con = imaplib.IMAP4_SSL(imap_url)
con.login(username, password)
# con.select("INBOX")

# result, data = con.fetch(b'3', '(RFC822)')
# raw = email.message_from_bytes(data[0][1])
# print(get_body(raw))