enum DiaSemana {
    SEGUNDA, TERÇA, QUARTA, QUINTA, SEXTA, SÁBADO, DOMINGO
}

public class TestEnum {
    public static void main(String[] args) {
        DiaSemana hoje = DiaSemana.QUARTA;
        System.out.println("Hoje é: " + hoje);
    }
}