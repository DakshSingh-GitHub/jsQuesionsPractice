arr = ["eat", "tea", "tan", "ate", "nat", "bat"]
out_arr = {}

for ele in arr:
    sp_el = "".join(sorted(ele))
    if sp_el not in out_arr:
        out_arr[sp_el] = [ele]
    else:
        out_arr[sp_el].append(ele)

groups = [sorted(words) for words in out_arr.values()]
groups.sort(key=lambda g: g[0])

for group in groups:
    print(" ".join(group))
