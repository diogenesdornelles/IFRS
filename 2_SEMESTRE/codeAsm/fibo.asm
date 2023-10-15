;---------------------------------------------------
; Programa: Obter fibonacci com I/O
; Autor: Diógenes Dornelles Costa
; Data: 05/10/2023
;---------------------------------------------------

; FIBONACCI

; A sequência: 1, 1, 2, 3, 5, 8, 13, 21, 34,...
; é construída repetindo-se o número 1 duas vezes
; e somando-se dois números anteriores.

;---------------------------------------------------

; programa principal

ORG 0                       ; Instruções a partir da memória 0

ler_n:                      ; loop para leitura da variável N
     IN PAINEL_CHAVES       ; retorna no acumulador o valor binário do painel de 8 chaves
     OR #0                  ; o acumulador está sendo comparado com zero usando a operação "OU" lógica (OR)
     JZ ler_n               ; se valor de entrada == 0, então permanece no loop (código de condição 1)
     STA N                  ; caso contrário, armazena o acumulador na variável N e segue
     JMP enquanto_N

enquanto_N:
     LDA N                  ; carrega conteúdo de N no acumulador
     SUB #1                 ; subtrai 1 de modo direto
     STA N                  ; armazena novo valor em N
     JZ  fim                ; se N = 0, Halt
     JN  fim                ; se N < 0, Halt
     JMP atualiza_variaveis ; senão, calcula o próximo fibonacci

atualiza_variaveis:
     LDA B+1                ; atualiza C p/ que tenha o valor de B, na parte alta e baixa
     STA C+1
     LDA B
     STA C

     LDA A+1                ; atualiza B p/ que tenha o valor de A, na parte alta e baixa
     STA B+1
     LDA A
     STA B

     LDA C                  ; atualiza A de forma que A = A + B(C), parte alta e baixa
     ADC A
     STA A
     LDA C+1
     ADC A+1
     STA A+1
     JMP atualiza_visor

atualiza_visor:             ; atualiza o visor da aplicação
     LDA A
     OUT VISOR
     LDA A+1
     OUT VISOR
     JMP enquanto_N         ; chama o loop, iterativamente

;------------------------------------------------------
; encerra o programa
fim:
    HLT                     ; finaliza o programa

;------------------------------------------------------
; constantes de hardware
VISOR    EQU 0              ; endereço do display
PAINEL_CHAVES EQU 0         ; endereço do painel de 8 chaves
;------------------------------------------------------

ORG  60h                    ; variáveis localizadas a partir da posição hexadecimal 60 da memória (100 dec).

A:   DW 1                   ; n (A), o último fibonacci obtido.
B:   DW 0                   ; n-1 (B), o fibonacci anterior.
C:   DW 0                   ; espaço na memória para armazenar valor de B.
N:   DW 0                   ; número de elementos pretendidos da sequência de Fibonacci;

;------------------------------------------------------


