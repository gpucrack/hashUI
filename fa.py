import sys

if __name__ == '__main__':
    
    file = open('file.txt', "r")
    # utiliser readlines pour lire toutes les lignes du fichier
    # La variable "lignes" est une liste contenant toutes les lignes du fichier
    lines = file.readlines()
    # fermez le fichier après avoir lu les lignes
    file.close()
    # Itérer sur les lignes
    count=0
    
    for line in lines:
        if (line.strip()=="FALSE ALERT"):
            count +=1
    print(count)
            
        
    
