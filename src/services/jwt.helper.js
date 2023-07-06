const SECRET = 

function verifyToken(token) {
	return jwt.verify(token, SECRET);
}

export { verifyToken };