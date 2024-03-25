#!/bin/bash

# Başlangıç etiketlerini yaz
echo "<!DOCTYPE html><html><head><title>Commit Log</title></head><body><h1>Commit Log</h1><ul>" > commit_log.html

# Commitleri alın ve HTML dosyasına ekleyin
git log --format="<li>%h - %an, %ad: %s</li>" --date=short >> commit_log.html

# Son etiketleri ekle
echo "</ul></body></html>" >> commit_log.html

# Kullanıcıya mesaj ver
echo "Commit log oluşturuldu: commit_log.html"