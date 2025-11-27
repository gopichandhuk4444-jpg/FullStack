import csv
with open('ECE_CSV.csv') as f:
    ece_data=csv.DictReader(f,delimiter=',')
    for rec in ece_data:
        print(rec['Register Number'])
    #print(ece_data)