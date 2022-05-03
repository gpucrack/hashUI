
import pwd


if __name__ == '__main__':
    
    sum = 0
    yes_pwd = 0
    no_pwd = 0
    
    file = open('file.txt', "r")
    # utiliser readlines pour lire toutes les lignes du fichier
    # La variable "lignes" est une liste contenant toutes les lignes du fichier
    lines = file.readlines()
    # fermez le fichier après avoir lu les lignes
    file.close()
    # Itérer sur les lignes
    
    for line in lines:
        if (line.strip()=="PASSWORD"):
            yes_pwd +=1
        if (line.strip()=="NO_PASSWORD"):
            yes_pwd +=1
    sum=(yes_pwd/(yes_pwd+no_pwd))*100
    print(sum)
            
        
    
