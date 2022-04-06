
if __name__ == '__main__':
    
    file1 = open('file.txt', 'r')
 
    while True:   
        line = file1.readline()
        if not line:
            break
        if (line.strip()=="PASSWORD"):
            break
    
    line = file1.readline()
    print(line.strip())
        
    
