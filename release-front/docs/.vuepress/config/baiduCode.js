module.exports = {
	head: [
		[
			"script",
			{},
			`
            var _hmt = _hmt || [];
            (function () {
                var hm = document.createElement("script");
                hm.src = "https://hm.baidu.com/hm.js?31d16925859d7ef5721696ab9f4e8087";
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(hm, s);
            })();
        `,
		],
	],
};
