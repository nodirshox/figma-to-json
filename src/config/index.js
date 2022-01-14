const CONFIG = {
	HTTP_PORT: getConf("HTTP_PORT", 3000),
	FIGMA_ENDPOINT: getConf("FIGMA_ENDPOINT", "https://api.figma.com"),
};

function getConf(name, def = "") {
	if (process.env[name]) {
		return process.env[name];
	}
	return def;
}

exports.CONFIG = CONFIG;
