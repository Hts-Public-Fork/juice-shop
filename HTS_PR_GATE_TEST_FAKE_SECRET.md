# HTSOne PR-Gate Validation Fixture — FAKE SECRETS (DO NOT USE)

This file is a **test fixture** introduced by an authorized end-to-end validation of
the diff-aware PR gate. Every credential below is fabricated / a throwaway generated
key with no access to anything. It exists only to make the secret scanner flag a NEW
finding so the `htsaspm-approver` gate can be observed blocking the PR. Safe to delete.

## Fake AWS credentials (fabricated, non-functional)
aws_access_key_id = AKIAZ7HTSFAKEKEYTEST0
aws_secret_access_key = wJalrXUtnFEMI/K7MDENG/bPxRfiCYFAKEEXKEY99

## Throwaway RSA private key (freshly generated, never used, zero value)
```
-----BEGIN PRIVATE KEY-----
MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCss22fILSxsSVw
A7ghQMcxriAMXRLZ+pBl+Dbmtr3WgWCqYBwLmWZ6jKowjg+DhB+kr13E6ZpymUi6
kkHNT755261z4RlN8RB2+05EAZjeJZtdWkLup17eV7O2SKvWutVYbMHI4bpUeRe1
YkBiYl2lld4csDRo5a2Kbr22u1Gei0cLlmVJmo0Z3+Hpl5go1Brsisk+aDlcG44f
BbsTd+iZlU/t1pmV905xe/+B8AXztRVBmPJBVGd2VABMh37LhnnXKQr/xe8RD9//
8uJKgXHW5MnVnMhajpdW4Stnu94Om4NO2ee7zLXKbwug/vfbR+4HtRUe9eeNBEKH
pDyxJCLPAgMBAAECggEACFZxSGlvz9RZllrXnONfuopJic9EhbmPFx0wqVrRN3Xv
kMorEHRLekcoQEfbf+H1FSJSSJtulXHJDRjajGr5KzDr4thPPHAS92uSj73z/2WZ
Zpxg9tylu95IEtjXUvqaKja19FjRghqGhn9D1HwjQUdG/eOT5CySgEhwaE4K1riW
M2fKDM7Yv0aFOsLTPP7hjhSbM1sE3tPdjZ3nF9m8VQrld5YzDenW5l5zOCzmkrsy
lPTpY7NDqBrzGRQAfiFg25WuyrM/R5QRKDmAALTA2fjjKmp6Bze4DCJhVvhQ3HVI
9DwW5W+uC+eBl/pdZk7TkMF73BvhjHKVBuI6+tpTwQKBgQDuPLgKzTc+UQch9KG5
FQI+NdzGC6JDqfguHeBYSnWpTJ8UTqtsifkmaXcy1JBhjdo02rDE2/+aUurdxsAy
Xl5OI3O+xeiyR3XlxopBLIA7YZuF+BVkbnT6IYTU+4KFF9F+kjMpfoXSXFp87gek
962UUeVGeS8C9Vj5VhCEa6VRmQKBgQC5k84NvBKYZyqXEw37koP7YbX/9wszXKMu
sO1WqyqwBstPKbbGcYsysdIu2ga9/ss8TbQ0d2b6LOi2v3WdKgMIq7w5v1zqWqU+
0AKqACso9+V92nu0DFKiZgi4DZY/ApcXtXJiM67RqdQIGy6OD5mNM/JjEeTbgQDu
dKF8T2wopwKBgCH++CRSdHeoCGSIDCvlG5TVCtQYBOey8X9jNAhlV7T5Ahpbv4qV
hcA9fIz8WD4Th/fS3Ta6ThcvjeRn4DVP0hVEadfnVfVazTAkzMXQG9xdaVwMssDK
IlcvQU1DNrTXWUW+hx58t4v1MdRyAxU/Yr2vkhAkatj5OeEarvC2i7jBAoGAEByv
FS4xBx5d6kPzQNZVsyumm5SdWlY+rL0bvhyaVjIg0Ly0a8JL7ZjWwM6ZK0HF73Rn
ou6C+FGR2twAoCaXoNcYPoNI0+gO1MdGk+/zz1jGigjAGL/BJOxq8V/snYfiCmLs
jW4jTXzLNfD2N8tO752E++j/z7cBl7J0mtBieZ0CgYBlTMdoGaf1MMWdGopSBB4l
aKbE4QFBD+M3otjhOXadlGozIJI5wsKBzKv6HYaetWG1x0P8SNem5FR8y15zfkW1
6cIQxILJqAorBMuqDCGLtgCJVshsqlDxTYQW6AbDCzA9wQfPWQR/czPF/FsA7Ma+
mhLVTCsqsa7ke1cZdS02hw==
-----END PRIVATE KEY-----
```
