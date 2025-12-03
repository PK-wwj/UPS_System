ALTER TABLE payment
ALTER COLUMN paymentid DROP DEFAULT;

DROP SEQUENCE IF EXISTS payment_paymentid_seq;

ALTER TABLE payment
ALTER COLUMN paymentid ADD GENERATED ALWAYS AS IDENTITY;

'''之前修改过id导致不一致的问题出现'''
SELECT setval('payment_paymentid_seq', (SELECT MAX(paymentid) FROM payment));
