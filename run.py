# Instancia o arquivo Web e abre o Browser

import os
import sys

import webbrowser


#
# Methods
#

def is_python_3():
    if (sys.version_info > (3, 0)):
        return True
    else:
        return False


def getHTTPServerExecutable():
    if is_python_3():
        return "http.server"
    else:
        return "SimpleHTTPServer"


# get python executable
executable = sys.executable

webbrowser.open("http://localhost:8000/index.html")

# start http server
os.system(executable + " -m " + getHTTPServerExecutable())
