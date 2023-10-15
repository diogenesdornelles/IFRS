;---------------------------------------------------
; Programa:
; Autor:
; Data:
;---------------------------------------------------
ORG 0

loop:
     LDA N
     SUB #1
     STA N
     JZ  fim  ; se N = 0, Halt
     JN  fim  ; se N < 0, Halt
     JMP proximo_fib ; Senão, calcula o próximo Fib
     JMP substitui_AB  ; e substitui A e B por A = A + B e B = A

proximo_fib:
     LDA A
     ADD B
     STA FIB

substitui_AB:
     LDA B
     STA C
     LDA A
     STA B
     LDA C
     ADD A
     STA A

     JMP loop    ; chama o loop, recursivamente

fim: HLT     ; finaliza o programa

ORG  100

FIB: DB 0 ; o fibonacci obtido
A:   DB 1
B:   DB 0
C:   DB 0
N:   DB 10 ; ordem do elemento pretendido dentro da sequência de Fibonacci;
