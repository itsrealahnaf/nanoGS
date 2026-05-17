const nanoGS = {
    init: function () {
        console.log("Hurrah!, nanoGS initialized. This script was made by Ahnaf Al Sadid to make simplier connection between your HTML and Google sheets")
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
