import pandas as pd
import json
import requests

df = pd.read_csv('suburb.csv')


# ====================
# Postcode_2_suburb
# ====================
# res = []
# map = {}
# for line in df.values:
#     suburb = line[0]
#     postcode = line[2]
#     if not map.get(postcode):
#         map[postcode] = [suburb]
#     else:
#         map[postcode] = map[postcode] + [suburb]
#
# for key, value in map.items():
#     res.append({key: value})
#
# with open('postcode_2_suburb.json', 'w') as fp:
#     json.dump(res, fp)
# print(df.head())

# ====================
# Suburb_2_postcode
# ====================
# res = []
# for line in df.values:
#     map = {}
#     suburb = line[0]
#     postcode = line[2]
#     map['suburb'] = suburb
#     map['postcode'] = postcode
#     res.append(map)
#
#
# with open('suburb_2_postcode.json', 'w') as fp:
#     json.dump(res, fp)

# ====================
# Suburb_2_polygon
# ====================
polygon_requests_url = 'https://a5c7zwf7e5.execute-api.ap-southeast-2.amazonaws.com/dev/locations?locationType=SUBURB&locationName='

with open('suburb_2_postcode.json', 'r') as file:
    s_2_p = json.load(file)

    res = []
    for data in s_2_p:
        map = {}
        result = requests.get(polygon_requests_url + data['suburb'])

        json_obj = json.loads(result.text)

        print(data['suburb'])
        map['suburb'] = data['suburb']

        coordinates = json_obj[0]['features'][0]['geometry']['coordinates'][0]
        map['coordinates'] = coordinates

        res.append(map)

    with open('suburb_2_coordinates.json', 'w') as fp:
        json.dump(res, fp)
