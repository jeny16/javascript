import numpy as np

def encrypt_hill_cipher(plaintext, key_matrix):
    block_size = len(key_matrix)
    plaintext_num = [ord(char) - ord('A') for char in plaintext]
    ciphertext = ""

    for i in range(0, len(plaintext_num), block_size):
        block = np.array(plaintext_num[i:i+block_size])
        encrypted_block = np.dot(key_matrix, block) % 26
        ciphertext += "".join(chr(val + ord('A')) for val in encrypted_block)

    return ciphertext

plaintext = "JENYPANSURIYA"
key_matrix = np.array([[6, 24], [13, 16]])
ciphertext = encrypt_hill_cipher(plaintext, key_matrix)

print("Plaintext  :", plaintext)
print("Ciphertext :", ciphertext)
