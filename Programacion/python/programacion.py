import pandas as pd # importamos 
import datetime
import sys
import time


print(datetime.datetime.now())

for i in range(100):
    time.sleep(0.5)
    sys.stdout.write("\r%d" % i)
    sys.stdout.flush()
    




columnas = ['Nombre', 'Edad', 'Genero', 'Id'] # Columnas del DataFrame

datos = pd.DataFrame([['Carmen', 26, 'F', 1743],
                      ['Pedro', 39, 'M', 9264],
                      ['Maria', 28, 'F', 8362],
                      ['Julio', 35, 'M', 2537]],
                      columns=columnas)
print(datos)



    





