import os

def find_html_files(directory):
    html_files = {}
    for root, dirs, files in os.walk(directory):
        relative_root = os.path.relpath(root, directory)
        html_files[relative_root] = [os.path.join(root, file) for file in files if file.lower().endswith(".html")]
    return html_files

def create_summary_file(html_files, summary_file):
    with open(summary_file, 'w', encoding='utf-8') as f:
        f.write('<html><head><title>acodeapp</title>\n')
        f.write('<style>\n')
        f.write('body { font-family: Arial, sans-serif; margin: 40px;  }\n')
        f.write('h1, h2 { color: #333; }\n')
        f.write('ul { list-style-type: none; padding: 0; }\n')
        f.write('li { margin: 10px 0;}\n')
        f.write('a { text-decoration: none; color: yellow; background: black; }\n')
        f.write('a:hover { text-decoration: underline; }\n')
        f.write('hr { border: 0; height: 1px; background: red; margin: 20px 0; }\n')
        f.write('</style>\n')
        f.write('</head><body>\n')
        f.write(f'<h1>Toplam {sum(len(files) for files in html_files.values())} adet HTML dosyanız var.</h1>\n')
        for directory, files in html_files.items():
            if files:
                f.write(f'<h2>{directory}</h2>\n')
                f.write('<ul>\n')
                for html_file in files:
                    relative_path = os.path.relpath(html_file, os.path.dirname(summary_file))
                    file_name = os.path.basename(html_file)
                    f.write(f'<li><a href="{relative_path}">{file_name}</a></li>\n')
                f.write('</ul>\n')
                f.write('<hr>\n')
        f.write('</body></html>\n')

def main():
    source_directory = "/storage/emulated/0/Buraksariguzeldev"  # Kendi klasör yolunla değiştir
    summary_file = os.path.join(source_directory, "acodeapp.html")
    
    html_files = find_html_files(source_directory)
    
    print(f"Toplam {sum(len(files) for files in html_files.values())} adet HTML dosyanız var.")
    
    if any(html_files.values()):
        print("HTML dosya listesini acodeapp.html dosyasına yazıyor...")
        create_summary_file(html_files, summary_file)
        print("İşlem tamamlandı.")

if __name__ == "__main__":
    main()