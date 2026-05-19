const nanoGS = {
    init: function () {
        console.log(`
╔══════════════════════════════════════╗
║            nanoGS Initialized        ║
╠══════════════════════════════════════╣
║  Lightweight Google Sheets API       ║
║  Fast • Simple • Serverless          ║
╠══════════════════════════════════════╣
║  Status  : Connected                 ║
║  Version : v1.0.0                    ║
║  Author  : Ahnaf Al Sadid            ║
╚══════════════════════════════════════╝

nanoGS is ready to use.
`);
    },
    searchData: async function (dburl, searchKey, searchValue, returnKey) {
        try {
            const res = await fetch(dburl);
            const data = await res.json();
            const match = data.find(item => item[searchKey] === searchValue);
            return match ? match[returnKey] : null;
        } catch (err) {
            console.error("JSON Search Error:", err);
            return null;
        }
    },
    postData: async function (dburl, data) {
        try {
            const res = await fetch(dburl, {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            return await res.json();
        } catch (err) {
            console.error("Data Send Error:", err);
            return null;
        }
    }
};
