// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract CrowdFunding {
    struct Campaign{
        address owner;
        string title;
        string description;
        uint target;
        uint deadline;
        uint collected;
        string images;
        address[] donators; 
        uint256[] donations;        
    }
    mapping(uint => Campaign) public campaigns;
    uint public numberofCampaign=0;

    function createCampaign(string memory _title, string memory _description, uint _target, uint _deadline, string memory _images,address _owner) public returns(uint){
        Campaign storage newCampaign = campaigns[numberofCampaign];
        require(block.timestamp > newCampaign.deadline, "Campaign is closed");
        newCampaign.owner = _owner;
        newCampaign.title = _title;
        newCampaign.description = _description;
        newCampaign.target = _target;
        newCampaign.deadline = _deadline;
        newCampaign.collected = 0;
        newCampaign.images = _images;
        numberofCampaign++;
        return numberofCampaign-1;
    }
    function donate(uint _Id) public payable{
    uint256 amount = msg.value;
    Campaign storage campaign = campaigns[_Id];
    campaign.donators.push(msg.sender);
    campaign.donations.push(amount);
    (bool sent, ) = campaign.owner.call{value: amount}("");
    if (sent){
        campaign.collected += amount;
    }
    }
function Getdonators(uint _Id) public view returns(address[] memory,uint256[] memory){
 return (campaigns[_Id].donators,campaigns[_Id].donations);
}
function getCampaigns()public view returns (Campaign[] memory) {
    Campaign[]memory allCampaign =new Campaign[](numberofCampaign);
    for (uint i =0;i<numberofCampaign;i++){
        Campaign storage item = campaigns[i];
        allCampaign[i]= item;
    }
    return allCampaign;
}
}