import java.util.HashMap;

public class MediaPonderada {
  public static void main(String[] args) {

    double notas = 0.0;

    HashMap<String, Double> pesos = new HashMap<String, Double>();
    pesos.put("Trabalho de laboratório", 2.0);
    pesos.put("Avaliação semestral", 3.0);
    pesos.put("Exame final ", 5.0);
    double sumPesos = 0.0;

    HashMap<String, Double> conceitos = new HashMap<String, Double>();
    conceitos.put("A", 8.0);
    conceitos.put("B", 7.0);
    conceitos.put("C", 6.0);
    conceitos.put("D", 5.0);
    conceitos.put("E", 0.0);

    for (String materia : pesos.keySet()) {
      System.out.println("Digite a nota da " + materia + ": ");
      notas += Double.parseDouble(System.console().readLine()) * pesos.get(materia);
      sumPesos += pesos.get(materia);
    }

    double media = notas / sumPesos;

    for (String conceito : conceitos.keySet()) {
      if (media >= conceitos.get(conceito)) {
        System.out.println("Sua média ponderada é: " + media);
        System.out.println("Seu conceito é: " + conceito);
        break;
      }
    }
    
  }
}
