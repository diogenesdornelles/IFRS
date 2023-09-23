	ORG 10
loop:	LDA dividendo
    SUB divisor
    JN fim
    STA dividendo
    LDA resultado
    ADD incremento
    STA resultado
	JMP loop
fim:	HLT
divisor	DEF BYTE=2
dividendo	DEF BYTE=7
resultado	DEF BYTE=0
incremento  DEF BYTE=1