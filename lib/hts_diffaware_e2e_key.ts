// HTS DIFF-AWARE E2E VALIDATION (authorized security test) — 2026-07-08.
// FAKE, throwaway credentials generated for this test only; never used anywhere.
// Purpose: prove PR_DIFF_SCOPE_ENABLED scans the PR HEAD (fail-closed) so the
// secret introduced ONLY in this changed file is caught and the gate BLOCKS.
// Safe to revert immediately after the gate verdict.

// Fake AWS credentials (throwaway, invalid)
export const awsAccessKeyId = "AKIA5DIFFAWARE7E2ETEST";
export const awsSecretAccessKey = "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY";

export const htsDiffAwareE2EKey = `
-----BEGIN PRIVATE KEY-----
MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCrde0HCj6s6GPY
eOf6TS0fTYYdsmbDQxr2bf2hgkhOcHEENXnyIY+rUAgwYyvtIWp9HpDpxN+Hm9E0
9Es8QxhYSFDHutnbTwi+G7GCIlhTXvbiBKiPEuQGVZSAP6Y2H5K18hz1cyM+hgXD
psXi1PB/1/wNYQS54Sxd/u2UTj0+fG3D5W6L/R6C13071QDdUXbrhTh/0zxaW0ay
vvfU225KflJb+zu186ovQkvuPI6Xv94JXv1kj/p/iUQ2mRZVtlPfCSpeh/dUambg
bpqF6vqDE9IR3TosfPYcgL4tnglPWD/SagKjIl5pjdYKlFLjc2dtwjHveqpZsuVZ
vQ4939dxAgMBAAECggEAEW3X+a+aCiXH038L1rLeZ7iPzeg+/7GMNbldzzuA+d8+
b8b3VcyBUBDfOjr0gcL0MhKHuMmjTsPBLwy3sqEf4gZ81qa4400MBpYmU8QFvjjQ
qA5A66VIElhD84r0zHrmZRIezTkGX8JMJvSmmC2c4mP8SkhezH3WDpp9wEX5PgcJ
VOlf9FdpAnSLFpBJ60NcKwoXjGbbZEgPMHy5zj+1NrYwpiZGrABjW08dJ564cEpJ
9sO2TpS478mIG8kUIgdw8SBHnaJeR5N1u8J7C8/WOC/libxUKpk6wkk3/8FE705H
3LHYOoaDYVgF7dm8VZD6+eMsDM9DPMzzkbaYzTe4WQKBgQDr6UHSW/CiDtRVNtaT
jM7UW3r1J0c62nrOTgG+axa53SzSLqaQw6Z4kmZHMoIny67jma9L1vBYE01GCFeL
sMmSmzzOT/bseildkZczRC1jn1Y3FIqj6Vfudg9ERTILmAH2/lzW+hvDwZjwHPyn
Eae4j/+if3QF3iSx3V+BGxeAyQKBgQC6D6409T7MZbwD+Z+/L/YDA9nXRLjNGlpa
rXUDJ4JQGu7pDpioazdvT3BDl4eAfYpT5gWupniAA+oH4Y6RbWiR4Yj/DQtjv1TD
CN24+LQrK9h6FeqmGOXBMoSBkga3p6jvk4m2bWkUGjrMD8IFWpc2nLJDvGOKGr1L
W4DhUFtdaQKBgQDiLI/ejib2OCF6UUkHzUe+cLZBs5am5jA2+rLRTPpM16/REsi+
odVIY5OLTvFaFf1mWEGoBDoJNvgu3HCSjLu0wwBZDHE/5x8hhiPgEs0xZeHSjO8e
luimxql8WprQYrv/gX6g3MkhtMpb6m6P/m0+lVARCwDBX2ju3b5imQa/gQKBgC5O
rsXhb+LBQz0eCKM11Z3EfJg2M2RgtbIxz5icYbN8MI/yoQ3xuVdLxx4bfY7+L8pX
ynxAVGdQEhQqECijuU3tewI3hekqenccIsrhoz3HaNZh1AfI1I3z+8Sfymo1ITeX
WcP8kRV+vbmCBoD8nfvqnfd70K5Tn189A+OP811ZAoGBAMh+r332wWL+FBwNBZtB
Xwt55uYi+l5In7nN+zrnFRgxbUOzXf+ypceRieSIVQoZSficqnmyJu4k+EuLY2zF
n/3Syuxlfywneod27OSPEdSxzMDy+AFgbBI6OAJ/q8uGdO5qNEdt6XyR0MO07ikw
Az6ElrXKDR+GCFExiPl7vEUp
-----END PRIVATE KEY-----
`;
