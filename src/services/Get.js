export class Get { 
    static async getAppData(){ 
        try { 
            const resp = await fetch ('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=5') 
            if (!resp.ok) { 
                console.error('Could not fetch:', resp.status); 
                return false; 
            } 
            const data = await resp.json(); 
            return data; 
        } catch(error){ 
            console.error('Could not fetch:', error.message) 
            return false; 
        } 
} 
} 