let nock = require('nock');

module.exports.hash = "0ae102e8eeaca2f753bf1ab5a0585d6b";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://endpoint', {"encodedQueryParams":true})
  .post('/text/analytics/v3.1-preview.4/entities/health/jobs', {"documents":[{"id":"0","text":"Baby not likely to have Meningitis. in case of fever in the mother, consider Penicillin for the baby too.","language":"en"}]})
  .query(true)
  .reply(202, "", [
  'Transfer-Encoding',
  'chunked',
  'operation-location',
  'https://endpoint/text/analytics/v3.1-preview.4/entities/health/jobs/cd074072-c893-41f5-bf15-cd68d1376a4b',
  'x-envoy-upstream-service-time',
  '2763',
  'apim-request-id',
  'dccbf6f8-bd81-4167-8adf-6540b7da74a9',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Wed, 28 Apr 2021 20:13:39 GMT'
]);

nock('https://endpoint', {"encodedQueryParams":true})
  .get('/text/analytics/v3.1-preview.4/entities/health/jobs/cd074072-c893-41f5-bf15-cd68d1376a4b')
  .query(true)
  .reply(200, {"jobId":"cd074072-c893-41f5-bf15-cd68d1376a4b","lastUpdateDateTime":"2021-04-28T20:13:39Z","createdDateTime":"2021-04-28T20:13:36Z","expirationDateTime":"2021-04-29T20:13:36Z","status":"notStarted","errors":[]}, [
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-envoy-upstream-service-time',
  '11',
  'apim-request-id',
  '96543665-4788-412d-a685-143e831cb1ec',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Wed, 28 Apr 2021 20:13:39 GMT'
]);

nock('https://endpoint', {"encodedQueryParams":true})
  .get('/text/analytics/v3.1-preview.4/entities/health/jobs/cd074072-c893-41f5-bf15-cd68d1376a4b')
  .query(true)
  .reply(200, {"jobId":"cd074072-c893-41f5-bf15-cd68d1376a4b","lastUpdateDateTime":"2021-04-28T20:13:39Z","createdDateTime":"2021-04-28T20:13:36Z","expirationDateTime":"2021-04-29T20:13:36Z","status":"notStarted","errors":[]}, [
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-envoy-upstream-service-time',
  '5',
  'apim-request-id',
  'f107bb3b-9fda-49bd-aab5-0d8127f96e1f',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Wed, 28 Apr 2021 20:13:39 GMT'
]);

nock('https://endpoint', {"encodedQueryParams":true})
  .get('/text/analytics/v3.1-preview.4/entities/health/jobs/cd074072-c893-41f5-bf15-cd68d1376a4b')
  .query(true)
  .reply(200, {"jobId":"cd074072-c893-41f5-bf15-cd68d1376a4b","lastUpdateDateTime":"2021-04-28T20:13:41Z","createdDateTime":"2021-04-28T20:13:36Z","expirationDateTime":"2021-04-29T20:13:36Z","status":"succeeded","errors":[],"results":{"documents":[{"id":"0","entities":[{"offset":0,"length":4,"text":"Baby","category":"Age","confidenceScore":0.9,"name":"Infant","links":[{"dataSource":"UMLS","id":"C0021270"},{"dataSource":"AOD","id":"0000005273"},{"dataSource":"CCPSS","id":"0030805"},{"dataSource":"CHV","id":"0000006675"},{"dataSource":"DXP","id":"U002089"},{"dataSource":"LCH","id":"U002421"},{"dataSource":"LCH_NW","id":"sh85066022"},{"dataSource":"LNC","id":"LA19747-7"},{"dataSource":"MDR","id":"10021731"},{"dataSource":"MSH","id":"D007223"},{"dataSource":"NCI","id":"C27956"},{"dataSource":"NCI_FDA","id":"C27956"},{"dataSource":"NCI_NICHD","id":"C27956"},{"dataSource":"SNOMEDCT_US","id":"133931009"}]},{"offset":24,"length":10,"text":"Meningitis","category":"Diagnosis","confidenceScore":0.9,"assertion":{"certainty":"negativePossible"},"name":"Meningitis","links":[{"dataSource":"UMLS","id":"C0025289"},{"dataSource":"AOD","id":"0000006185"},{"dataSource":"BI","id":"BI00546"},{"dataSource":"CCPSS","id":"1018016"},{"dataSource":"CCSR_10","id":"NVS001"},{"dataSource":"CHV","id":"0000007932"},{"dataSource":"COSTAR","id":"478"},{"dataSource":"CSP","id":"2042-5301"},{"dataSource":"CST","id":"MENINGITIS"},{"dataSource":"DXP","id":"U002543"},{"dataSource":"HPO","id":"HP:0001287"},{"dataSource":"ICD10","id":"G03.9"},{"dataSource":"ICD10AM","id":"G03.9"},{"dataSource":"ICD10CM","id":"G03.9"},{"dataSource":"ICD9CM","id":"322.9"},{"dataSource":"ICPC2ICD10ENG","id":"MTHU048434"},{"dataSource":"ICPC2P","id":"N71002"},{"dataSource":"LCH","id":"U002901"},{"dataSource":"LCH_NW","id":"sh85083562"},{"dataSource":"LNC","id":"LP20756-0"},{"dataSource":"MDR","id":"10027199"},{"dataSource":"MEDCIN","id":"31192"},{"dataSource":"MEDLINEPLUS","id":"324"},{"dataSource":"MSH","id":"D008581"},{"dataSource":"NANDA-I","id":"02899"},{"dataSource":"NCI","id":"C26828"},{"dataSource":"NCI_CPTAC","id":"C26828"},{"dataSource":"NCI_CTCAE","id":"E11458"},{"dataSource":"NCI_FDA","id":"2389"},{"dataSource":"NCI_NCI-GLOSS","id":"CDR0000471780"},{"dataSource":"NCI_NICHD","id":"C26828"},{"dataSource":"OMIM","id":"MTHU005994"},{"dataSource":"PSY","id":"30660"},{"dataSource":"RCD","id":"X000H"},{"dataSource":"SNM","id":"M-40000"},{"dataSource":"SNMI","id":"DA-10010"},{"dataSource":"SNOMEDCT_US","id":"7180009"},{"dataSource":"WHO","id":"0955"}]},{"offset":47,"length":5,"text":"fever","category":"SymptomOrSign","confidenceScore":0.99,"name":"Fever","links":[{"dataSource":"UMLS","id":"C0015967"},{"dataSource":"AIR","id":"FEVER"},{"dataSource":"AOD","id":"0000004396"},{"dataSource":"BI","id":"BI00751"},{"dataSource":"CCC","id":"K25.2"},{"dataSource":"CCPSS","id":"1017166"},{"dataSource":"CCSR_10","id":"SYM002"},{"dataSource":"CHV","id":"0000005010"},{"dataSource":"COSTAR","id":"300"},{"dataSource":"CPM","id":"65287"},{"dataSource":"CSP","id":"2871-4310"},{"dataSource":"CST","id":"FEVER"},{"dataSource":"DXP","id":"U001483"},{"dataSource":"GO","id":"GO:0001660"},{"dataSource":"HPO","id":"HP:0001945"},{"dataSource":"ICD10","id":"R50.9"},{"dataSource":"ICD10AM","id":"R50.9"},{"dataSource":"ICD10CM","id":"R50.9"},{"dataSource":"ICD9CM","id":"780.60"},{"dataSource":"ICNP","id":"10041539"},{"dataSource":"ICPC","id":"A03"},{"dataSource":"ICPC2EENG","id":"A03"},{"dataSource":"ICPC2ICD10ENG","id":"MTHU041751"},{"dataSource":"ICPC2P","id":"A03002"},{"dataSource":"LCH","id":"U001776"},{"dataSource":"LCH_NW","id":"sh85047994"},{"dataSource":"LNC","id":"MTHU013518"},{"dataSource":"MDR","id":"10005911"},{"dataSource":"MEDCIN","id":"6005"},{"dataSource":"MEDLINEPLUS","id":"511"},{"dataSource":"MSH","id":"D005334"},{"dataSource":"MTHICD9","id":"780.60"},{"dataSource":"NANDA-I","id":"01128"},{"dataSource":"NCI","id":"C3038"},{"dataSource":"NCI_CTCAE","id":"E11102"},{"dataSource":"NCI_FDA","id":"1858"},{"dataSource":"NCI_NCI-GLOSS","id":"CDR0000450108"},{"dataSource":"NCI_NICHD","id":"C3038"},{"dataSource":"NOC","id":"070307"},{"dataSource":"OMIM","id":"MTHU005439"},{"dataSource":"OMS","id":"50.03"},{"dataSource":"PCDS","id":"PRB_11020.02"},{"dataSource":"PDQ","id":"CDR0000775882"},{"dataSource":"PSY","id":"23840"},{"dataSource":"QMR","id":"Q0200115"},{"dataSource":"RCD","id":"X76EI"},{"dataSource":"SNM","id":"F-03003"},{"dataSource":"SNMI","id":"F-03003"},{"dataSource":"SNOMEDCT_US","id":"386661006"},{"dataSource":"WHO","id":"0725"}]},{"offset":60,"length":6,"text":"mother","category":"FamilyRelation","confidenceScore":0.99,"name":"Mother (person)","links":[{"dataSource":"UMLS","id":"C0026591"},{"dataSource":"AOD","id":"0000027173"},{"dataSource":"CCPSS","id":"U000286"},{"dataSource":"CHV","id":"0000008266"},{"dataSource":"CSP","id":"1124-5492"},{"dataSource":"HL7V3.0","id":"MTH"},{"dataSource":"LCH","id":"U003028"},{"dataSource":"LCH_NW","id":"sh85087526"},{"dataSource":"LNC","id":"LA10417-6"},{"dataSource":"MSH","id":"D009035"},{"dataSource":"NCI","id":"C25189"},{"dataSource":"NCI_CDISC","id":"C25189"},{"dataSource":"NCI_GDC","id":"C25189"},{"dataSource":"PSY","id":"32140"},{"dataSource":"RCD","id":"X78ym"},{"dataSource":"SNMI","id":"S-10120"},{"dataSource":"SNOMEDCT_US","id":"72705000"}]},{"offset":77,"length":10,"text":"Penicillin","category":"MedicationName","confidenceScore":0.95,"assertion":{"certainty":"neutralPossible"},"name":"penicillins","links":[{"dataSource":"UMLS","id":"C0030842"},{"dataSource":"AOD","id":"0000019206"},{"dataSource":"ATC","id":"J01C"},{"dataSource":"CCPSS","id":"0014106"},{"dataSource":"CHV","id":"0000009423"},{"dataSource":"CSP","id":"0199-8025"},{"dataSource":"GS","id":"4011"},{"dataSource":"LCH","id":"U003521"},{"dataSource":"LCH_NW","id":"sh85099402"},{"dataSource":"LNC","id":"LP14319-5"},{"dataSource":"MEDCIN","id":"40319"},{"dataSource":"MMSL","id":"d00116"},{"dataSource":"MSH","id":"D010406"},{"dataSource":"NCI","id":"C1500"},{"dataSource":"NCI_DTP","id":"NSC0402815"},{"dataSource":"NCI_NCI-GLOSS","id":"CDR0000045296"},{"dataSource":"NDDF","id":"016121"},{"dataSource":"PSY","id":"37190"},{"dataSource":"RCD","id":"x009C"},{"dataSource":"SNM","id":"E-7260"},{"dataSource":"SNMI","id":"C-54000"},{"dataSource":"SNOMEDCT_US","id":"764146007"},{"dataSource":"VANDF","id":"4019880"}]},{"offset":96,"length":4,"text":"baby","category":"Age","confidenceScore":0.96,"name":"Infant","links":[{"dataSource":"UMLS","id":"C0021270"},{"dataSource":"AOD","id":"0000005273"},{"dataSource":"CCPSS","id":"0030805"},{"dataSource":"CHV","id":"0000006675"},{"dataSource":"DXP","id":"U002089"},{"dataSource":"LCH","id":"U002421"},{"dataSource":"LCH_NW","id":"sh85066022"},{"dataSource":"LNC","id":"LA19747-7"},{"dataSource":"MDR","id":"10021731"},{"dataSource":"MSH","id":"D007223"},{"dataSource":"NCI","id":"C27956"},{"dataSource":"NCI_FDA","id":"C27956"},{"dataSource":"NCI_NICHD","id":"C27956"},{"dataSource":"SNOMEDCT_US","id":"133931009"}]}],"relations":[],"warnings":[]}],"errors":[],"modelVersion":"2021-03-01"}}, [
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-envoy-upstream-service-time',
  '38',
  'apim-request-id',
  '35e03993-54f1-42ef-b4b1-2938569f4864',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Wed, 28 Apr 2021 20:13:41 GMT'
]);

nock('https://endpoint', {"encodedQueryParams":true})
  .get('/text/analytics/v3.1-preview.4/entities/health/jobs/cd074072-c893-41f5-bf15-cd68d1376a4b')
  .query(true)
  .reply(200, {"jobId":"cd074072-c893-41f5-bf15-cd68d1376a4b","lastUpdateDateTime":"2021-04-28T20:13:41Z","createdDateTime":"2021-04-28T20:13:36Z","expirationDateTime":"2021-04-29T20:13:36Z","status":"succeeded","errors":[],"results":{"documents":[{"id":"0","entities":[{"offset":0,"length":4,"text":"Baby","category":"Age","confidenceScore":0.9,"name":"Infant","links":[{"dataSource":"UMLS","id":"C0021270"},{"dataSource":"AOD","id":"0000005273"},{"dataSource":"CCPSS","id":"0030805"},{"dataSource":"CHV","id":"0000006675"},{"dataSource":"DXP","id":"U002089"},{"dataSource":"LCH","id":"U002421"},{"dataSource":"LCH_NW","id":"sh85066022"},{"dataSource":"LNC","id":"LA19747-7"},{"dataSource":"MDR","id":"10021731"},{"dataSource":"MSH","id":"D007223"},{"dataSource":"NCI","id":"C27956"},{"dataSource":"NCI_FDA","id":"C27956"},{"dataSource":"NCI_NICHD","id":"C27956"},{"dataSource":"SNOMEDCT_US","id":"133931009"}]},{"offset":24,"length":10,"text":"Meningitis","category":"Diagnosis","confidenceScore":0.9,"assertion":{"certainty":"negativePossible"},"name":"Meningitis","links":[{"dataSource":"UMLS","id":"C0025289"},{"dataSource":"AOD","id":"0000006185"},{"dataSource":"BI","id":"BI00546"},{"dataSource":"CCPSS","id":"1018016"},{"dataSource":"CCSR_10","id":"NVS001"},{"dataSource":"CHV","id":"0000007932"},{"dataSource":"COSTAR","id":"478"},{"dataSource":"CSP","id":"2042-5301"},{"dataSource":"CST","id":"MENINGITIS"},{"dataSource":"DXP","id":"U002543"},{"dataSource":"HPO","id":"HP:0001287"},{"dataSource":"ICD10","id":"G03.9"},{"dataSource":"ICD10AM","id":"G03.9"},{"dataSource":"ICD10CM","id":"G03.9"},{"dataSource":"ICD9CM","id":"322.9"},{"dataSource":"ICPC2ICD10ENG","id":"MTHU048434"},{"dataSource":"ICPC2P","id":"N71002"},{"dataSource":"LCH","id":"U002901"},{"dataSource":"LCH_NW","id":"sh85083562"},{"dataSource":"LNC","id":"LP20756-0"},{"dataSource":"MDR","id":"10027199"},{"dataSource":"MEDCIN","id":"31192"},{"dataSource":"MEDLINEPLUS","id":"324"},{"dataSource":"MSH","id":"D008581"},{"dataSource":"NANDA-I","id":"02899"},{"dataSource":"NCI","id":"C26828"},{"dataSource":"NCI_CPTAC","id":"C26828"},{"dataSource":"NCI_CTCAE","id":"E11458"},{"dataSource":"NCI_FDA","id":"2389"},{"dataSource":"NCI_NCI-GLOSS","id":"CDR0000471780"},{"dataSource":"NCI_NICHD","id":"C26828"},{"dataSource":"OMIM","id":"MTHU005994"},{"dataSource":"PSY","id":"30660"},{"dataSource":"RCD","id":"X000H"},{"dataSource":"SNM","id":"M-40000"},{"dataSource":"SNMI","id":"DA-10010"},{"dataSource":"SNOMEDCT_US","id":"7180009"},{"dataSource":"WHO","id":"0955"}]},{"offset":47,"length":5,"text":"fever","category":"SymptomOrSign","confidenceScore":0.99,"name":"Fever","links":[{"dataSource":"UMLS","id":"C0015967"},{"dataSource":"AIR","id":"FEVER"},{"dataSource":"AOD","id":"0000004396"},{"dataSource":"BI","id":"BI00751"},{"dataSource":"CCC","id":"K25.2"},{"dataSource":"CCPSS","id":"1017166"},{"dataSource":"CCSR_10","id":"SYM002"},{"dataSource":"CHV","id":"0000005010"},{"dataSource":"COSTAR","id":"300"},{"dataSource":"CPM","id":"65287"},{"dataSource":"CSP","id":"2871-4310"},{"dataSource":"CST","id":"FEVER"},{"dataSource":"DXP","id":"U001483"},{"dataSource":"GO","id":"GO:0001660"},{"dataSource":"HPO","id":"HP:0001945"},{"dataSource":"ICD10","id":"R50.9"},{"dataSource":"ICD10AM","id":"R50.9"},{"dataSource":"ICD10CM","id":"R50.9"},{"dataSource":"ICD9CM","id":"780.60"},{"dataSource":"ICNP","id":"10041539"},{"dataSource":"ICPC","id":"A03"},{"dataSource":"ICPC2EENG","id":"A03"},{"dataSource":"ICPC2ICD10ENG","id":"MTHU041751"},{"dataSource":"ICPC2P","id":"A03002"},{"dataSource":"LCH","id":"U001776"},{"dataSource":"LCH_NW","id":"sh85047994"},{"dataSource":"LNC","id":"MTHU013518"},{"dataSource":"MDR","id":"10005911"},{"dataSource":"MEDCIN","id":"6005"},{"dataSource":"MEDLINEPLUS","id":"511"},{"dataSource":"MSH","id":"D005334"},{"dataSource":"MTHICD9","id":"780.60"},{"dataSource":"NANDA-I","id":"01128"},{"dataSource":"NCI","id":"C3038"},{"dataSource":"NCI_CTCAE","id":"E11102"},{"dataSource":"NCI_FDA","id":"1858"},{"dataSource":"NCI_NCI-GLOSS","id":"CDR0000450108"},{"dataSource":"NCI_NICHD","id":"C3038"},{"dataSource":"NOC","id":"070307"},{"dataSource":"OMIM","id":"MTHU005439"},{"dataSource":"OMS","id":"50.03"},{"dataSource":"PCDS","id":"PRB_11020.02"},{"dataSource":"PDQ","id":"CDR0000775882"},{"dataSource":"PSY","id":"23840"},{"dataSource":"QMR","id":"Q0200115"},{"dataSource":"RCD","id":"X76EI"},{"dataSource":"SNM","id":"F-03003"},{"dataSource":"SNMI","id":"F-03003"},{"dataSource":"SNOMEDCT_US","id":"386661006"},{"dataSource":"WHO","id":"0725"}]},{"offset":60,"length":6,"text":"mother","category":"FamilyRelation","confidenceScore":0.99,"name":"Mother (person)","links":[{"dataSource":"UMLS","id":"C0026591"},{"dataSource":"AOD","id":"0000027173"},{"dataSource":"CCPSS","id":"U000286"},{"dataSource":"CHV","id":"0000008266"},{"dataSource":"CSP","id":"1124-5492"},{"dataSource":"HL7V3.0","id":"MTH"},{"dataSource":"LCH","id":"U003028"},{"dataSource":"LCH_NW","id":"sh85087526"},{"dataSource":"LNC","id":"LA10417-6"},{"dataSource":"MSH","id":"D009035"},{"dataSource":"NCI","id":"C25189"},{"dataSource":"NCI_CDISC","id":"C25189"},{"dataSource":"NCI_GDC","id":"C25189"},{"dataSource":"PSY","id":"32140"},{"dataSource":"RCD","id":"X78ym"},{"dataSource":"SNMI","id":"S-10120"},{"dataSource":"SNOMEDCT_US","id":"72705000"}]},{"offset":77,"length":10,"text":"Penicillin","category":"MedicationName","confidenceScore":0.95,"assertion":{"certainty":"neutralPossible"},"name":"penicillins","links":[{"dataSource":"UMLS","id":"C0030842"},{"dataSource":"AOD","id":"0000019206"},{"dataSource":"ATC","id":"J01C"},{"dataSource":"CCPSS","id":"0014106"},{"dataSource":"CHV","id":"0000009423"},{"dataSource":"CSP","id":"0199-8025"},{"dataSource":"GS","id":"4011"},{"dataSource":"LCH","id":"U003521"},{"dataSource":"LCH_NW","id":"sh85099402"},{"dataSource":"LNC","id":"LP14319-5"},{"dataSource":"MEDCIN","id":"40319"},{"dataSource":"MMSL","id":"d00116"},{"dataSource":"MSH","id":"D010406"},{"dataSource":"NCI","id":"C1500"},{"dataSource":"NCI_DTP","id":"NSC0402815"},{"dataSource":"NCI_NCI-GLOSS","id":"CDR0000045296"},{"dataSource":"NDDF","id":"016121"},{"dataSource":"PSY","id":"37190"},{"dataSource":"RCD","id":"x009C"},{"dataSource":"SNM","id":"E-7260"},{"dataSource":"SNMI","id":"C-54000"},{"dataSource":"SNOMEDCT_US","id":"764146007"},{"dataSource":"VANDF","id":"4019880"}]},{"offset":96,"length":4,"text":"baby","category":"Age","confidenceScore":0.96,"name":"Infant","links":[{"dataSource":"UMLS","id":"C0021270"},{"dataSource":"AOD","id":"0000005273"},{"dataSource":"CCPSS","id":"0030805"},{"dataSource":"CHV","id":"0000006675"},{"dataSource":"DXP","id":"U002089"},{"dataSource":"LCH","id":"U002421"},{"dataSource":"LCH_NW","id":"sh85066022"},{"dataSource":"LNC","id":"LA19747-7"},{"dataSource":"MDR","id":"10021731"},{"dataSource":"MSH","id":"D007223"},{"dataSource":"NCI","id":"C27956"},{"dataSource":"NCI_FDA","id":"C27956"},{"dataSource":"NCI_NICHD","id":"C27956"},{"dataSource":"SNOMEDCT_US","id":"133931009"}]}],"relations":[],"warnings":[]}],"errors":[],"modelVersion":"2021-03-01"}}, [
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-envoy-upstream-service-time',
  '36',
  'apim-request-id',
  'd098240e-cd3d-48aa-a60f-1106de195464',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Wed, 28 Apr 2021 20:13:41 GMT'
]);
