import crypto from 'crypto'

// Generate a random salt of 16 bytes
const salt = crypto.randomBytes(16);

// Choose the cost parameters
const N = 16384; // CPU/memory cost parameter
const r = 8; // Block size parameter
const p = 1; // Parallelization parameter

// Choose the desired key length in bytes
const dkLen = 32;

// export

export const hash_password = (password: string) => {
	// Hash the password with scrypt
	crypto.scrypt(password, salt, dkLen, { N, r, p }, (err, derivedKey) => {
		if (err) throw err;
		// Store the hashed password along with the salt and cost parameters
		const hashedPassword = derivedKey.toString('hex');
		console.log(hashedPassword); // e.g. 70ac953b777e24c4f41c4657eb9f03c2b00b951cd50675806c55d903dba9cbca
	});
}