
ssh config

use the public dns for ssh, not the ip as before

Host ion
HostName ec2-52-40-231-205.us-west-2.compute.amazonaws.com
User ubuntu
IdentityFile ~/.ssh/johnscode-aws

software setup

volume setup

sudo mkfs.xfs -f /dev/xvdb
sudo mkdir /data
sudo echo "$(blkid -o export /dev/xvdb | grep ^UUID=) /data xfs defaults,noatime" | sudo tee -a /etc/fstab
sudo mount /dev/xvdb /data


following steps from https://identity.foundation/ion/install-guide/



>sudo apt install snapd

add following to ~/.bash_profile

PATH="$PATH:/snap/bin"

sudo snap install node --classic --channel=14
sudo apt-get update
sudo apt install build-essential

change bitcoin instructions to get compatible version
see https://github.com/decentralized-identity/ion/issues/276

git clone https://github.com/bitcoin/bitcoin.git
cd bitcoin

git checkout v0.20.1

./autogen.sh

./contrib/install_db4.sh `pwd`

export BDB_PREFIX='/home/bitcoin/bitcoin/db4'

./configure BDB_LIBS="-L${BDB_PREFIX}/lib -ldb_cxx-4.8" BDB_CFLAGS="-I${BDB_PREFIX}/include"

make -j $(nproc)

or get prebuilt binary from https://bitcoincore.org/bin/bitcoin-core-0.20.1/



create /data/bitcoin.conf

testnet=1
server=1
datadir=/data/.bitcoin
rpcuser=admin
rpcpassword=@dm1n
txindex=1

start bitcoin via script file

#!/bin/sh
cd ~
bitcoin-23.0/bin/bitcoind -conf=/data/.bitcoin/bitcoin.conf -daemon

mongo

wget -qO - https://www.mongodb.org/static/pgp/server-5.0.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/5.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-5.0.list
sudo apt-get update
sudo apt-get install -y mongodb-org

test key
ssh-keygen -t rsa -b 4096 -f iontestkey -C 443iontest
SHA256:mlVkBh94QCU0Qqb500QMDGx0gOtKDu5WpyhMQbQelGs 443iontest
The key's randomart image is:
+---[RSA 4096]----+
|.o.++=*=O=*      |
|.oo o=.ooB..     |
|.o.oo   ..o      |
|.Eo  . o .       |
|.o.   o S        |
|.o.. . =         |
|B.o o o          |
|o* .             |
|+.               |
+----[SHA256]-----+