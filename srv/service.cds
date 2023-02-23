using { crystalcicdtesting02 as my } from '../db/schema';

using crystalcicdtesting02 from '../db/schema';

@path : 'service/crystalcicdtesting02'
service crystalcicdtesting02Service
{
    entity SrvBooks as
        projection on my.Books;
}

annotate crystalcicdtesting02Service with @requires :
[
    'authenticated-user'
];
