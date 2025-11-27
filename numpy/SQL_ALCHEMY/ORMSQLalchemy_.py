# First, import the necessary imports so we can create a database engine and a session from that engine.

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy_utils import database_exists, create_database
from local_settings import postgresql as settings

# You’ll notice local_settings contains the PostgreSQL settings. It’s just a dictionary file and you can see an example in the GitHub repo.

# Create a get_engine function to make our lives easier.

def get_engine(user, passwd, host, port, db):
    url = f"postgresql://{user}:{passwd}@{host}:{port}/{db}"
    if not database_exists(url):
        create_database(url)
    engine = create_engine(url, pool_size=50, echo=False)
    return engine

# Get the credentials from the local_settings import above.

engine = get_engine(settings['pguser'],
          settings['pgpasswd'],
          settings['pghost'],
          settings['pgport'],
          settings['pgdb'])

# Verify that the engine was created successfully.

engine.url.database

# 'alpha'

# Create a new function so that we don’t have to enter our credentials every time.

def get_engine_from_settings():
    keys = ['pguser','pgpasswd','pghost','pgport','pgdb']
    if not all(key in keys for key in settings.keys()):
        raise Exception('Bad config file')

    return get_engine(settings['pguser'],
                      settings['pgpasswd'],
                      settings['pghost'],
                      settings['pgport'],
                      settings['pgdb'])

# Create a session function that binds to our previously created engine.

def get_session():
    engine = get_engine_from_settings()
    session = sessionmaker(bind=engine)()
    return session

        # Create a new session and verify it works.

session = get_session()