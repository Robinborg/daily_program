import math

def is_prime(num):
    for i in range(2, int(math.sqrt(num))+1):
        if num % i == 0:
            return False
    return True

print(is_prime(13))
print(is_prime(14))
print(is_prime(97))
