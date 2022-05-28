//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Box {
    uint private value;

    event ValueChanged(uint newValue);

    function store(uint newValue) public {
        value = newValue;
        emit ValueChanged(newValue);
    }

    function retrieve() public view returns (uint) {
        return value;
    }
}