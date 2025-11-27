def give_me_a_key():
    k=input('Press any key on keyboard : ')
    res=''
    try:
        num=int(k)
    except:
        if k.isalpha():
            res=k.upper()
        else:
            res=k
    else:
        res=num**2
    finally:
        print(res)
give_me_a_key()