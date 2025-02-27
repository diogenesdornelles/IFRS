enum Alternativas {
    A,
    B,
    C,
    D,
    E
}

public class ModTres4Consurso {
    public static void main(String[] args) {
        Alternativas[] gabarito = new Alternativas[10];
        Alternativas[][] grades = new Alternativas[10][10];
        int[] acertos = new int[10];

        // Obtendo o gabarito
        for (int i = 0; i < 10; i++) {
           
                long f = Math.round(Math.random() * 5) % 5;
                if (f == 0) {
                    gabarito[i] = Alternativas.A;
                } else if (f == 1) {
                    gabarito[i] = Alternativas.B;
                } else if (f == 2) {
                    gabarito[i] = Alternativas.C;
                } else if (f == 3) {
                    gabarito[i] = Alternativas.D;
                } else {
                    gabarito[i] = Alternativas.E;
                }
            
        }

        
        // Obtendo as grades de cada candidato (i), com as resposats (j)
        for (int i = 0; i < 10; i++) {
            for (int j = 0; j < 10; j++) {
                long f = Math.round(Math.random() * 5) % 5;
                if (f == 0) {
                    grades[i][j] = Alternativas.A;
                } else if (f == 1) {
                    grades[i][j] = Alternativas.B;
                } else if (f == 2) {
                    grades[i][j] = Alternativas.C;
                } else if (f == 3) {
                    grades[i][j] = Alternativas.D;
                } else {
                    grades[i][j] = Alternativas.E;
                }
            }
        }

        // percorre cada candidato
        for (int i = 0; i < 10; i++) {
            // percorre cada respostas
            for (int j = 0; j < 10; j++) {
                // compara cada resposta com o gabarito
                if (grades[i][j] == gabarito[j]) {
                    // incrementa acertos
                    acertos[i]++;
                }
            }
        }
        for (int i = 0; i < 10; i++) {
            System.out.printf("Candidato %d: %d acertos\n", i, acertos[i]);
        }
    }
}
