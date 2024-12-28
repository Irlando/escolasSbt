import { cert, initializeApp } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';

const serviceAccount = {
  type: "service_account",
  project_id: "sabatinabolt",
  private_key_id: "e113021780ef2f9688190129700a1d9e48d7f5cb",
  private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC04H4UIunwEvKy\nmFZtZ17oCiILcaIq7vri0uZayQzBGs7TSr4NiggnEAqZCDG44ncPXT9vJQ4N46Jk\nBZ4ERBAq9WiVSU+etgWH0145gf9v1pbrMklFfwyJzKlBXpl6YmdaIgc/mYKygCE9\nGW8Cv7dC5KndfW4hAg12yxV8jehWD4YcIl4TjTO4epN1Whv1LPw6IukkbISP7FS/\nSe3u3e9HDDqgSu3j/RY69NQ/dWOlkvkcgGvf38EUh4F+eCBA88UStEyMJJWygc1S\nOtSLJCNvw7VnMpAYPwEj3fgbY+9oKYJBRQc/XBa22Ohc5vwB26E04LAlYVYRh7BC\nxRR6g5xXAgMBAAECggEAA8O4XArt+4Upb/Yjtls0anfrhXlz+pjGt/nTuYf9r/cy\n3srrcbSxvr5iuhSllEeCWtuB+no29KsMMjC7vTL9cydwacsA0TjQnKcVivTdsCIz\nOenuBHhEdom/7BBf+WAa7pFOvVAgnD52cqMY4GHFGqtPrcByjlVQmmxXoiQB9eiL\n0f5qYL+4p7ERWIQq0gTdbA+bJVCpV6oimxbOA5qAfkv9e/FzgLMk+U3Aos7iFysi\n14AFpefIMRWZAlr7/t6NXC0Dfe00gLVSNUaVwxZlRDH41jKp53dg9rOBN88l6fyl\nRIf5DtKX734t+LeSc3HINANiWkNF6XxW3fvH/qvowQKBgQDomvJC/7N3hTBC28Q/\nYBWlDw3EuGOHHs15dfyBE08AFIirwpxksPr2dRM+Y2vvQH8Umllb29FuWU3+h/YA\nsCeZBKDC7/8Tq/FNR926IohYkGndOIYcik4mbrYzn7w5k8YYKa74DFDSm4UeLLzu\neU+w27sd8Y/sc39qo1PB72fLHwKBgQDHEajnbwvFUb88CGjxMU1/iLs0A7gprIbI\nScnXAn/myhI9DG1TflXkYYWhxBqNiOH3iF8m7UP7e9PFCUcf9+uo6liq11LYwGdp\nyCZ68HYwfGWpmt97aao0Z73t5vD1bc7ovsROfK5ogEeA0sidG6WHqM1KktsjqB66\nTR2eqGe/yQKBgAhyeBHOz2mrwJDtAjd6+c5AubNHLvYdPEEI896MIPZTyJLUQnG1\nq6d/oO9HFQhfQz4wTMZ1OSnUvGxd66UiwI1iCaSKqqzANccksPytfF4bAH00LEql\nCymCI8PELUW6BBukh+IiMF01oKPz4/iVFzvI/wabWyqvFxV8UPJeC1rpAoGAY7M1\ni8uy8n1RsMhpfrr5nHEniRJ/zudojbFfFH9c/YKhBdBOhO2WKQ6qte0Ye2BeA/JZ\n7Y4RaUeINXvDEoDBl1TfWZkEFiiu4mzq0NHT786tv/cgDJhMNXjrx9XNQq5fXXQF\nr2WEmDP/G8b10LHDAqGJR9srQ710vkvXFNo1M/kCgYBWZcmG7ww+f4S0UMX0krKi\nOuV3gNpDfGOQknQ25AQXRobbG8C2KDS7JEMo2Z/AvXyIfs1gCbPBnpo0WH0y+rAn\no65zKIOnBZ/Wpv5roWL5fBNyCF7aa3nSrMdXqtKbMOxr/g7lAoC4yqHaFvJk29Qz\nhYVgDROprBrI7qerez4bAg==\n-----END PRIVATE KEY-----\n",
  client_email: "firebase-adminsdk-eq4fy@sabatinabolt.iam.gserviceaccount.com",
  client_id: "109695368902075113565",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-eq4fy%40sabatinabolt.iam.gserviceaccount.com",
  universe_domain: "googleapis.com"
};

const app = initializeApp({
  credential: cert(serviceAccount)
});

export const adminAuth = getAuth(app);
export const adminDb = getFirestore(app);