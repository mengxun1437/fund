import requests
import json

url_format = "http://api.fund.eastmoney.com/f10/lsjz?callback=&fundCode={}&pageIndex={}&pageSize={}"

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36',
    'Host': 'api.fund.eastmoney.com',
    'Referer': 'http://fundf10.eastmoney.com/'
}


def get_fund_hist_net_worth(fund_code):
    try:
        response_all_count = requests.get(
            url=url_format.format(fund_code, 0, 1), headers=headers)
        if response_all_count.status_code == 200:
            all_count = json.loads(response_all_count.text)['TotalCount']
            all_data = json.loads(requests.get(
                url=url_format.format(fund_code, 0, all_count), headers=headers).text)['Data']['LSJZList']
            with open("./static/{}.json".format(str(fund_code)), "w", encoding="utf-8") as f:
                f.write(json.dumps(all_data, ensure_ascii=False))
                f.close()
            print('get {} records\nsave data into ./static/{}.json'.format(
                len(all_data), str(fund_code)))
    except:
        print('get fund hist net worth error')


if __name__ == '__main__':
    get_fund_hist_net_worth(161725)
