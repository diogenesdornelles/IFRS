	ORG 10
loop:	LDA X
	STA MAIOR
	LDA MAIOR
	SUB Y
	JN Ymaior
	HLT
Ymaior: LDA Y
	STA MAIOR
	HLT
X	DEF BYTE=45
Y	DEF BYTE=20
MAIOR DEF BYTE=255