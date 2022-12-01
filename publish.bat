set ClientPublishFolder="\\vmware-host\Shared Folders\VMWare-Share\TestTools\Deploy\Client\"
if exist %ClientPublishFolder% rmdir %ClientPublishFolder% /s /q
mkdir %ClientPublishFolder%

call npm run build

xcopy .\build\ %ClientPublishFolder% /s /e /y
