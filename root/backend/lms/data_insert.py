import pandas as pd
from User import models 
from models import User

tmp_data=pd.read_csv('sample.csv',sep=';')
User_data = [
    User(
        user_id=tmp_data.ix[row]['user_id'],
        f_name=tmp_data.ix[row]['f_name'],
        l_name=tmp_data.ix[row]['l_name'],
        email=tmp_data.ix[row]['email'],
        staff=tmp_data.ix[row]['staff'],
        is_active=tmp_data.ix[row]['is_active'],
        admin=tmp_data.ix[row]['admin'],
        role=tmp_data.ix[row]['role'],
        branch=tmp_data.ix[row]['branch'],
        school=tmp_data.ix[row]['school']
    )
    for row in tmp_data['user_id']
]
User.objects.bulk_create(User_data)