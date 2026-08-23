#!/usr/bin/env python3
import csv, hashlib, os
bad=[]
with open('data/design-index.csv', encoding='utf-8') as f:
    for r in csv.DictReader(f):
        p=r['file']
        if not os.path.exists(p):
            bad.append((r['id'],'missing',p)); continue
        h=hashlib.sha256(open(p,'rb').read()).hexdigest()
        if h != r['sha256']:
            bad.append((r['id'],'hash_mismatch',p))
print('OK' if not bad else f'FAIL: {len(bad)}')
for x in bad[:50]: print(x)
