const CONFIG = {
	HTTP_PORT: getConf("HTTP_PORT", 3000),
	FIGMA_ENDPOINT: getConf("FIGMA_ENDPOINT", "https://api.figma.com"),
	S3_ACCESS_KEY: getConf("S3_ACCESS_KEY", "default"),
	S3_SECRET_KEY: getConf("S3_SECRET_KEY", "default"),
	S3_ENDPOINT: getConf("S3_ENDPOINT", "localhost"),
	S3_FULL_ENDPOINT: getConf("S3_FULL_ENDPOINT", "http://localhost:9000"),
	S3_BUCKET_NAME: getConf("S3_BUCKET_NAME", "default"),
};

function getConf(name, def = "") {
	if (process.env[name]) {
		return process.env[name];
	}
	return def;
}

exports.CONFIG = CONFIG;
