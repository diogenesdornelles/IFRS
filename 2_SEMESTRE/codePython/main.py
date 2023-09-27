"""
Module to test calc. Keep matrix and main in the same directory to work.
Execute main.
"""
# import pdb
from time import perf_counter
from matrix import SquareMatrix, Method, ConvergenceError

if __name__ == '__main__':
    start = perf_counter()
    # Exercise 1
    MIN_APPROACH_EX_1 = 0.0000000000000000000001
    APPROACHES_EX_1 = [0, 0, 0]
    SOLUTION_EX_1 = [5, 9, 3]
    MATRIX_EX_1 = [
        [1, -3, 1],
        [0, 2, 5],
        [2.1, 1, 1],
    ]
    my_matrix = SquareMatrix(MATRIX_EX_1, SOLUTION_EX_1)
    try:
        print(my_matrix.get_solution(MIN_APPROACH_EX_1, APPROACHES_EX_1, 
                                     Method.GAUSS_JACOBI))
    except ConvergenceError as error:
        print('Exercise 01')
        print('The supplied matrix does not converge to a specific value',
              error)
        # result: ValueError: The supplied matrix does not converge to a value

    # Exercise 2
    MIN_APPROACH_EX_2 = 0.0000000000000000000001
    APPROACHES_EX_2 = [1.3, -1.3, -0.8]
    SOLUTION_EX_2 = [2, -2, -5]
    MATRIX_EX_2 = [
        [3, 1, 1],
        [2, 4, -1],
        [-1, 1, 3],
    ]
    my_matrix = SquareMatrix(MATRIX_EX_2, SOLUTION_EX_2)
    print('Exercise 02')
    print(my_matrix.get_solution(MIN_APPROACH_EX_2, APPROACHES_EX_2,
                                 Method.GAUSS_JACOBI))
    # result: [1.375, -1.375, -0.75]

    # Exercise 03-A
    MIN_APPROACH_EX_3_A = 0.0000000000000000000001
    APPROACHES_EX_3_A = [0, 0, 0]
    SOLUTION_EX_3_A = [12, 12, 12]
    MATRIX_EX_3_A = [
        [10, 1, 1],
        [1, 10, 1],
        [1, 1, 10],
    ]
    my_matrix = SquareMatrix(MATRIX_EX_3_A, SOLUTION_EX_3_A)
    print('Exercise 03-A')
    print(my_matrix.get_solution(MIN_APPROACH_EX_3_A, APPROACHES_EX_3_A,
                                 Method.GAUSS_JACOBI))
    # Result = [1.0, 1.0, 1.0]

    # Exercise 03-B
    MIN_APPROACH_EX_3_B = 0.0000000000000000000001
    APPROACHES_EX_3_B = [0, 0, 0, 0]
    SOLUTION_EX_3_B = [1, 1, 1, 1]
    MATRIX_EX_3_B = [
        [4, -1, 0, 0],
        [-1, 4, -1, 0],
        [0, -1, 4, -1],
        [0, 0, -1, 4]
    ]
    my_matrix = SquareMatrix(MATRIX_EX_3_B, SOLUTION_EX_3_B)
    print('Exercise 03-B')
    print(my_matrix.get_solution(MIN_APPROACH_EX_3_B, APPROACHES_EX_3_B,
                                 Method.GAUSS_JACOBI))
    # Result = [0.36363636363636365, 0.45454545454545453, 0.45454545454545453,
    #  0.36363636363636365]

    # Exercise 04-A
    MIN_APPROACH_EX_4_A = 0.0000000000000000000001
    APPROACHES_EX_4_A = [0, 0, 0]
    SOLUTION_EX_4_A = [5, 4, 1]
    MATRIX_EX_4_A = [
        [4, 1, -1],
        [-3, 3, 1],
        [2, 2, 5],
    ]
    my_matrix = SquareMatrix(MATRIX_EX_4_A, SOLUTION_EX_4_A)
    try:
        print('Exercise 04-A')
        print(my_matrix.get_solution(MIN_APPROACH_EX_4_A, APPROACHES_EX_4_A,
                                     Method.GAUSS_JACOBI))
    except ConvergenceError as error:
        print('Exercise 04-A')
        print('The supplied matrix does not converge to a specific value',
              error)
        # result: ValueError: The supplied matrix does not converge to a value
        # If we remove the convergence check, returns NAN (not a number)
        # [nan, nan, nan, nan]

    # Result: [0.5061728395061729, 2.123456790123457, -0.8518518518518519]

    # Exercise 04-B
    MIN_APPROACH_EX_4_B = 0.0000000000000000000001
    APPROACHES_EX_4_B = [0, 0, 0, 0]
    SOLUTION_EX_4_B = [2, -1, 0, 1]
    MATRIX_EX_4_B = [
        [4, 1, -1, 1],
        [1, 4, -1, -1],
        [-1, -1, 5, 1],
        [1, -1, 1, 3],
    ]
    my_matrix = SquareMatrix(MATRIX_EX_4_B, SOLUTION_EX_4_B)
    try:
        print('Exercise 04-B')
        print(my_matrix.get_solution(MIN_APPROACH_EX_4_B, APPROACHES_EX_4_B,
                                     Method.GAUSS_JACOBI))
    except ConvergenceError as error:
        print('Exercise 04-B')
        print('The supplied matrix does not converge to a specific value',
              error)
    # Result = [0.6164383561643836, -0.3972602739726028, 0.04794520547945205,
    #  -0.02054794520547946]
    # Exercise 05
    MIN_APPROACH_EX_5 = 0.1
    APPROACHES_EX_5 = [0.7, -1.6, 0.6]
    SOLUTION_EX_5 = [7, -8, 6]
    MATRIX_EX_5 = [
        [10, 2, 1],
        [1, 5, 1],
        [2, 3, 10]
    ]
    my_matrix = SquareMatrix(MATRIX_EX_5, SOLUTION_EX_5)
    try:
        print('Exercise 05 - Gauss-Jacobi')
        print(my_matrix.get_solution(MIN_APPROACH_EX_5, APPROACHES_EX_5,
                                     Method.GAUSS_JACOBI))
        print('Exercise 05 - Gauss-Seidel')
        print(my_matrix.get_solution(MIN_APPROACH_EX_5, APPROACHES_EX_5, 
                                     Method.GAUSS_SEIDEL))
    except ConvergenceError as error:
        print('Exercise 05 - Gauss-Jacobi')
        print('The supplied matrix does not converge to a specific value', 
              error)

    # Exercise 06
    MIN_APPROACH_EX_6 = 0.0000000000000000000001
    APPROACHES_EX_6 = [0, 0, 0, 0]
    SOLUTION_EX_6 = [1, 1, 1, 1]
    MATRIX_EX_6 = [
        [4, -1, 0, 0],
        [-1, 4, -1, 0],
        [0, -1, 4, -1],
        [0, 0, -1, 4],
    ]
    my_matrix = SquareMatrix(MATRIX_EX_6, SOLUTION_EX_6)
    print('Exercise 06')
    print(my_matrix.get_solution(MIN_APPROACH_EX_6, APPROACHES_EX_6,
                                 Method.GAUSS_SEIDEL))
    # Result = [0.36363636363636365, 0.45454545454545453, 0.45454545454545453,
    #  0.36363636363636365]

    # Exercise 07
    MIN_APPROACH_EX_7 = 0.0000000000000000000001
    APPROACHES_EX_7 = [0, 0, 0, 0]
    SOLUTION_EX_7 = [1, 1, 1, 1]
    MATRIX_EX_7 = [
        [1, 2, -1, 0],
        [2, -1, 0, 0],
        [0, -1, 2, -1],
        [0, 0, -1, 2],
    ]
    my_matrix = SquareMatrix(MATRIX_EX_7, SOLUTION_EX_7)
    try:
        print(my_matrix.get_solution(MIN_APPROACH_EX_7, APPROACHES_EX_7,
                                     Method.GAUSS_SEIDEL))
    except ConvergenceError as error:
        print('Exercise 07')
        print('The supplied matrix does not converge to a specific value',
              error)
    end = perf_counter()
    print(f'Time execution: {end - start}')
