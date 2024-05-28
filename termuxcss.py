import os

def find_css_files(directory):
    css_files = {}
    total_css_files = 0
    for root, dirs, files in os.walk(directory):
        folder_name = os.path.basename(root)
        if folder_name not in css_files:
            css_files[folder_name] = []
        css_found = False
        for file in files:
            if file.lower().endswith(".css"):  # Sadece CSS dosyalarını al
                css_files[folder_name].append((file, os.path.join(root, file)))
                css_found = True
                total_css_files += 1
        if not css_found:  # Eğer klasörde CSS dosyası bulunmuyorsa, bu klasörü listeden çıkar
            del css_files[folder_name]
    return css_files, total_css_files

def save_to_html(css_files, total_css_files, output_file):
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write('<!DOCTYPE html>\n')
        f.write('<html lang="en">\n')
        f.write('<head>\n')
        f.write('<meta charset="UTF-8">\n')
        f.write('<meta name="viewport" content="width=device-width, initial-scale=1.0">\n')
        f.write('<title>CSS Dosyaları</title>\n')
        f.write('<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">\n')
        f.write('<style>\n')
        f.write('body { background-color: #f8f9fa; }\n')
        f.write('.folder-name { color: #007bff; font-size: 24px; }\n')
        f.write('.file-name { color: #6c757d; }\n')
        f.write('</style>\n')
        f.write('</head>\n')
        f.write('<body>\n')
        f.write('<div class="container py-4">\n')
        f.write('<h1 class="mb-4 text-center">Bulunan CSS Dosyaları</h1>\n')
        f.write(f'<p class="mb-4 text-center">Toplam CSS dosyası: {total_css_files}</p>\n')
        for folder_name, files in css_files.items():
            f.write(f'<div class="mb-4">\n')
            f.write(f'<h2 class="mb-3 folder-name">{folder_name}</h2>\n')
            f.write('<ul class="list-group">\n')
            for css_file_name, css_file_path in files:
                f.write('<li class="list-group-item file-name">' + css_file_name + ' - ' + css_file_path + '</li>\n')
            f.write('</ul>\n')
            f.write('</div>\n')
            f.write('<hr>\n')
        f.write('</div>\n')
        f.write('</body>\n')
        f.write('</html>\n')

def main():
    source_directory = "/storage/emulated/0/Buraksariguzeldev"  # Belirtilen dizini kullan
    css_files, total_css_files = find_css_files(source_directory)
    
    output_file = "css_listesi.html"
    save_to_html(css_files, total_css_files, output_file)
    print("CSS dosyaları listesi HTML dosyasına kaydedildi.")

if __name__ == "__main__":
    main()